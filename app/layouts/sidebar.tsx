import { Form, Link, Outlet } from "react-router";
import type { Route } from "./+types/sidebar";
import { getContacts } from "../data";

//и то и то подгружает данные до рендеринга странницы, вызывается автоматом, не нужно их самим вызывать
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

// export async function clientLoader() {
//   const contacts = await getContacts();
//   return { contacts };
// }

export default function SidebarLayout({ loaderData }: Route.ComponentProps) {
  // console.log(loaderData);
  const { contacts } = loaderData;
  return (
    <>
      <div id="sidebar">
        <h1>
          <Link to={"/about"}>React Router Contacts</Link>
        </h1>
        <div>
          <Form id="search-form" role="search">
            <input
              aria-label="Search contacts"
              id="q"
              name="q"
              placeholder="Search"
              type="search"
            />
            <div aria-hidden hidden={true} id="search-spinner" />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i> no Name</i>
                    )}
                    {contact.favorite ? <span>★</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <div></div>
    </>
  );
}
