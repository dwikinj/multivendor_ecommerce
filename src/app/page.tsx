import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="font-bold text-blue-500 font-barlow text-8xl">Welcome</h1>
      <Button variant={"destructive"}>Click Me</Button>
    </div>
  );
}
