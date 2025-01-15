import type { Route } from "./+types/contact";

import {
  Form,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  Outlet,
  Link,
} from "react-router";
import type { ContactRecord } from "app/data";

// export async function clientLoader() {
//   const contact = {
//     avatar:
//       "https://sessionize.com/image/d14d-400o400o2-pyB229HyFPCnUcZhHf3kWS.png",
//     first: "Oscar",
//     last: "Newman",
//     twitter: "@__oscarnewman",
//   };

//   console.log("ContactLoader");
//   return { contact };
// }

const Contact = ({ loaderData }: Route.ComponentProps) => {
  // const { contact } = loaderData;
  // console.log(contact);
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placecats.com/200/200",
    twitter: "your_handel",
    notes: "Some notes",
    favorite: true,
  };
  return (
    <div id="contact">
      <div>
        <img
          src={contact.avatar}
          alt={`${contact.first} ${contact.last} avatar`}
          key={contact.avatar}
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>no name</i>
          )}

          <Favorite contact={contact} />
        </h1>
        {contact.twitter ? (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        ) : null}

        {contact.notes ? <p>{contact.notes}</p> : null}
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                "Please confirm you want to delete this record"
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

// function Contact() {
//   return (
//     <div>
//       <h2>Contact Details</h2>
//       <Outlet />
//     </div>
//   );
// }

function Favorite({ contact }: { contact: Pick<ContactRecord, "favorite"> }) {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        aria-label={favorite ? "Remove from favorites" : "Add to favorite"}
        name="favorite"
        value={favorite ? "false" : "true"}
      >
        {" "}
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

export default Contact;
