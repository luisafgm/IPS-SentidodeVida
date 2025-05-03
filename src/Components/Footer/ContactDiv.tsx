import SocialsDiv from '../Socials/SocialsDiv';
import Input from '../UI/Input';

const ContactDiv = () => {
  return (
    <div className="max-w-xs">
      <p className="ml-1 font-bold max-w-[250px]">
      ¿Tienes algo que hablar con nuestros profesionales?
      </p>
      <Input placeholder="sentidodevidaips@gmail.com" />
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
