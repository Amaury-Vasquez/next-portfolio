// Custom hook for home page
import { useHome } from "../../hooks/useHome";
import { Button } from "../../components/Button";
import {
  HomePage,
  Introduction,
  Image,
  Container,
  ButtonWrapper,
} from "./styles";

const Home = () => {
  const { loaded, img, mapMessages, showImage, showButton } = useHome(
    "https://i.imgur.com/bM4humM.jpg?3"
  );

  return (
    <HomePage>
      <Introduction>{mapMessages()}</Introduction>
      <Container>
        {showImage && loaded && <Image src={img} alt="Amaury Vasquez" />}
        {showButton && loaded && (
          <ButtonWrapper>
            <Button link="/projects" text="Start tour" />
          </ButtonWrapper>
        )}
      </Container>
    </HomePage>
  );
};

export default Home;
