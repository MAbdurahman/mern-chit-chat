import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {validateUserInfo, validateEmailPassword} from '@/utils/functionUtils.js';
import useNotification from '@/hooks/useNotification.jsx';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@radix-ui/react-tabs';
import {Input} from '@/components/ui/input.jsx';
import {Button} from '@/components/ui/button.jsx';

export default function AuthPage() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const navigate = useNavigate();
   const {updateNotification} = useNotification();
   const {isValid, error} = validateUserInfo(username, email, password);
   let timeOutId = null;


   async function handleSignUp() {
      console.log('signing up');
   }

   async function handleSignIn() {
      console.log('signing in');
   }

   return (
      <div
         className="background h-[100vh] w-[100vw] flex items-center justify-center">
         <div
            className="h-[80vh] bg-white  border-2 border-white  text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-200">
            <div className="text-center">
               <h1
                  className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CHIT-CHAT</h1>
               <p className="text-xs mb-6 font-normal text-gray-500 sm:px-16 lg: m-auto w-2/3 px-48 dark:text-gray-400">A
                  great platform for one-to-one and group chats, where one can
                  talk to old friends and meet new friends in a modern chat
                  application.</p>
            </div>
            <div className="flex items-center justify-center w-full">
               <Tabs defaultValue="signIn" className="w-3/4">
                  <TabsList className="bg-transparent rounded-none w-full grid xl:grid-cols-2">
                     <TabsTrigger
                        className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2    rounded-none w-full data-[state=active]:text-black  data-[state=active]:font-semibold data-[state=active]:border-b-black p-3 transition-all duration-300"
                        value="signIn"
                     >
                        SIGN IN
                     </TabsTrigger>
                     <TabsTrigger
                        className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2   rounded-none w-full data-[state=active]:text-black  data-[state=active]:font-semibold data-[state=active]:border-b-black p-3 transition-all duration-300 "
                        value="signUp"
                     >
                        SIGN UP
                     </TabsTrigger>
                  </TabsList>
                  <TabsContent value="signIn"
                               className="flex flex-col gap-5 mt-8">
                     <Input
                        placeholder="Email"
                        type="text"
                        className="rounded-200 p-6"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <Input
                        placeholder="Password"
                        type="password"
                        className="rounded-200 p-6"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <Button className="rounded-200 p-6 font-semibold cursor-pointer" onClick={handleSignIn}>
                        SIGN IN
                     </Button>
                  </TabsContent>
                  <TabsContent value="signUp" className="flex flex-col gap-5 mt-8 ">
                     <Input
                        placeholder="Email"
                        type="text"
                        className="rounded-200 p-6"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <Input
                        placeholder="Password"
                        type="password"
                        className="rounded-200 p-6"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <Input
                        placeholder="Confirm Password"
                        type="password"
                        className="rounded-200 p-6"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                     <Button className="rounded-200 p-6 font-semibold cursor-pointer" onClick={handleSignUp}>
                        SIGN UP
                     </Button>
                  </TabsContent>
               </Tabs>
            </div>
         </div>

      </div>
   )
}