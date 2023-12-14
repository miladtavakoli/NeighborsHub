import Container from "@mui/material/Container";
import Header from "components/header";

const PublicLayout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Header />
      {children}
    </Container>
  );
};

export default PublicLayout;
