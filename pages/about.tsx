import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

import Layout from "components/Layout";

export default function About() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About page
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
