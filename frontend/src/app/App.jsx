import {Fragment} from 'react';
import {Button} from '@/components/ui/button.jsx'

export default function App() {

   return (
      <Fragment>
         <h2 className="text-3xl text-center p-8 font-semibold">Vite React Project
            with Tailwind CSS v4 and Shadcn UI</h2>
         <div className="w-full max-w-7xl mx-auto p-8">
            <Button>Click Me</Button>
            <button>Submit</button>
         </div>
      </Fragment>

   );
}