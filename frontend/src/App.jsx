import {Fragment} from 'react';
import { Button } from "@/components/ui/button"

export default function App() {

   return (
      <Fragment>
         <h2 className="text-3xl text-center p-8 font-semibold">Vite React Project with Tailwind CSS v4 and Shadcn UI</h2>
         <Button className="ml-4">Click Me</Button>
      </Fragment>

   );
}