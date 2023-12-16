import Container from "@mui/material/Container";
import Header from "components/header";

const HeaderFooter = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Header />
      {children}
    </Container>
  );
};

export default HeaderFooter;
