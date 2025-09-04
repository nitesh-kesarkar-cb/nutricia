import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const ResetPasswordForm: React.FC = () => {
   const { t } = useTranslation();
   const search = useSearch({ strict: false });
   const navigate = useNavigate();
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
   const [success, setSuccess] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
         // Perform reset password logic here
         // If successful, display a success message
         const token = search.token as string;
         if (token) {
            await resetPassword(token, password);
            setSuccess(true);
            setTimeout(() => {
               navigate({ to: '/auth/login' });
            }, 1500);
         } else {
            setError(t('auth.invalidResetToken'));
         }
      } catch (err) {
         setError(t('auth.resetPasswordError'));
      }
   };

   const resetPassword = async (token: string, newPassword: string) => {
      // Implement your reset password logic here
      // This is just a placeholder
      return new Promise((resolve, reject) => {
         if (newPassword === 'newpassword') {
            resolve(true);
         } else {
            reject(new Error('Invalid new password'));
         }
      });
   };

   useEffect(() => {
      const token = search.token as string;
      if (!token) {
         navigate({ to: '/auth/login' });
      }
   }, [search.token]);

   return (
      <form onSubmit={handleSubmit} className="space-y-6">
         {success ? (
            <div className="text-sm text-green-500">
               <p>{t('auth.resetPasswordSuccess')}</p>
            </div>
         ) : (
            <>
               <div>
                  <label
                     htmlFor="password"
                     className="block text-sm font-medium text-gray-700"
                  >
                     {t('auth.newPassword')}
                  </label>
                  <input
                     type="password"
                     id="password"
                     placeholder="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className={cn(
                        'block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                     )}
                  />
               </div>
               <div>
                  <label
                     htmlFor="confirmPassword"
                     className="block text-sm font-medium text-gray-700"
                  >
                     {t('auth.confirmPassword')}
                  </label>
                  <input
                     type="password"
                     id="confirmPassword"
                     placeholder="confirm password"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     required
                     className={cn(
                        'block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                     )}
                  />
               </div>
               {error && (
                  <div className="text-sm text-red-500">
                     <p>{error}</p>
                  </div>
               )}
               <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  className="flex w-full justify-center rounded-md border border-transparent"
               >
                  {t('auth.resetPassword')}
               </Button>
            </>
         )}
      </form>
   );
};

export default ResetPasswordForm;
