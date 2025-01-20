import { type Config } from "@react-router/dev/config";

export default {
  // Рендеринг на стороне сервера
  // ssr: false,
  ssr: true,
  prerender: ["/about"],
} satisfies Config;
