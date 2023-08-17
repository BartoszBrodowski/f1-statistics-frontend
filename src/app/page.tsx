import Hero from "@/components/Hero";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
