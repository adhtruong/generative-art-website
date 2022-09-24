import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import Layout from "components/Layout";

const Truchet: React.FC<{}> = () => {
  return (
    <Layout>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Truchet
        </Typography>
      </Box>
    </Layout>
  );
};

export default Truchet;
