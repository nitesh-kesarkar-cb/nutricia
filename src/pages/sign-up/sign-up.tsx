import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
   return (
      <div className="grid min-h-screen place-items-center p-6">
         <SignUp routing="path" path="/sign-up" />
      </div>
   );
}
