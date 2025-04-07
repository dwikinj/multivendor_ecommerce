import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex gap-x-5 justify-end">
        <UserButton/>
        <ThemeToggle />
      </div>
      <h1 className="font-bold text-blue-500 font-barlow text-8xl">Home Pages</h1>
      <Button variant={"destructive"}>Click Me</Button>
    </div>
  );
}
