import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
   return (
      <div className="grid min-h-screen place-items-center p-6">
         <SignIn routing="path" path="/sign-in" />
      </div>
   );
}
