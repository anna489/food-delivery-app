"use client";

import { useState, MouseEvent, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PineconeLogo from "../Logo/PineconeBlack";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import Link from "next/link";
import MyDrawer from "../Drawer";
import { ColorLink } from "@/theme/theme";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/navigation";

const pages = [
  {
    name: "НҮҮР",
    href: "/",
  },
  {
    name: "ХООЛНЫ ЦЭС",
    href: "/foodmenu",
  },
  {
    name: "ХҮРГЭЛТИЙН БҮС",
    href: "/deliveryregion",
  },
];
const settings = ["Профайл", "Тохиргоо", , "Гарах"];

export const Header = () => {
  const { user } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [drawer, setDrawer] = useState(false);

  const router = useRouter();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenDrawer = () => setDrawer(true);
  const handleCloseDrawer = () => setDrawer(false);

  return (
    <Container>
      <Box maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: "center", gap: "20px" }}>
          <PineconeLogo />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <ColorLink
                  key={page.name}
                  style={{ textDecoration: "none" }}
                  onClick={handleCloseNavMenu}
                  href={page.href}
                >
                  {page.name}
                </ColorLink>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <ColorLink
                key={page.name}
                onClick={handleCloseNavMenu}
                href={page.href}
                style={{
                  textDecoration: "none",
                  margin: "auto 8px",
                  padding: "8px 16px",
                }}
              >
                {page.name}
              </ColorLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {user && (
              <Tooltip title="Профайл">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar
                    alt="User"
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex", flexGrow: 1 },
              alignItems: "center",
              position: "relative",
              justifyContent: "flex-end",
              gap: "30px",
            }}
          >
            <SearchOutlinedIcon
              fontSize="medium"
              sx={{ position: "absolute", left: "90px" }}
            />
            <OutlinedInput
              placeholder="Search"
              sx={{ borderRadius: 3, pl: 6, height: "42px" }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 0,
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  px: 2,
                }}
              >
                <ColorLink onClick={handleOpenDrawer}>
                  <ShoppingBasketOutlinedIcon fontSize="medium" />
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "8px",
                    }}
                  >
                    САГС
                  </span>
                </ColorLink>
                <MyDrawer open={drawer} handleClose={handleCloseDrawer} />
              </Box>

              <Box sx={{ px: 2, width: "120px" }}>
                {user ? (
                  <ColorLink
                    onClick={() => {
                      router.push("/userlogin");
                    }}
                  >
                    <PersonOutlineOutlinedIcon fontSize="medium" />
                    <span
                      style={{
                        display: "inline-block flex",
                        marginLeft: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      {user.name}
                    </span>
                  </ColorLink>
                ) : (
                  <ColorLink
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    <PersonOutlineOutlinedIcon fontSize="medium" />
                    <span
                      style={{
                        display: "inline-block flex",
                        marginLeft: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      нэвтрэх
                    </span>
                  </ColorLink>
                )}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </Container>
  );
};
