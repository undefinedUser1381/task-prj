import { useRoutes } from "react-router";
import routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import theme from "./theme";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

function App() {
  const router = useRoutes(routes);

  const rtlCache = createCache({
    key: "mui-rtl",
    stylisPlugins: [rtlPlugin],
  });

  return (
    <CacheProvider value={rtlCache}>
      <Box sx={{ paddingTop: "20px" }}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Box
              sx={{
                width : {
                  xs : "95%",
                  lg : "100%"
                },
                display : "flex",
                alignItems : "start",
                justifyContent : "flex-start",
                gap : "20px",
                flexDirection : {
                  xs : "column",
                  lg : "row"
                }
              }}
            >
              <Sidebar />
              {router}
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
      {/* <CssBaseline /> */}
    </CacheProvider>
  );
}

export default App;
