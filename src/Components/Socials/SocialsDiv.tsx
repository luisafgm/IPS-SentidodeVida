import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="https://www.linkedin.com/in/letodiani-roma/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://www.facebook.com/people/Sentido-de-Vida-IPS-CAD/61553834611415/">
        <BsFacebook />
      </a>
      <a target="_blank" href="https://www.instagram.com/sentidodevida_ipscad/">
        <BsInstagram />
      </a>
      <a target="_blank" href="https://twitter.com/l3todianiroma">
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialsDiv;
