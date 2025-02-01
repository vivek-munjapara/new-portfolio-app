interface Email {
   email?: any
}


const EmailComponent = ({ email = 'vivek.munjapara@gmail.com' }: Email) => {
   return <a href="mailto:tejrdevcode&#64;gmail&#46;com" rel="nofollow">{email}</a>;
};

/* const EmailComponent = () => {
   return <a href="mailto:tejrdevcode&#64;gmail&#46;com" rel="nofollow">tejrdevcode&#64;gmail&#46;com</a>;
} */

export default EmailComponent;