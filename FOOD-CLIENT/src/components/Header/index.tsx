"use client";

import { useState, MouseEvent } from "react";
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

// const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
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
  const user = null;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [drawer, setDrawer] = useState(false);

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
      <Container maxWidth="xl">
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.name}
                onClick={handleCloseNavMenu}
                href={page.href}
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "auto 8px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  padding: "8px 16px",
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              position: "relative",
            }}
          >
            <SearchOutlinedIcon
              fontSize="medium"
              sx={{ position: "absolute", left: 12 }}
            />
            <OutlinedInput
              placeholder="Search"
              sx={{ borderRadius: 3, pl: 6, height: "42px" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexGrow: 0,
            }}
          >
            <Box sx={{ px: 2 }}>
              <IconButton onClick={handleOpenDrawer} color="inherit">
                <ShoppingBasketOutlinedIcon fontSize="medium" />
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Сагс
                </span>
              </IconButton>
              <MyDrawer open={drawer} handleClose={handleCloseDrawer} />
            </Box>
            <Box sx={{ px: 2 }}>
              <IconButton onClick={() => {}} color="inherit" href="/login">
                <PersonOutlineOutlinedIcon fontSize="medium" />
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Нэвтрэх
                </span>
              </IconButton>
            </Box>

            {user && (
              <Tooltip title="Профайл">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt="User" src="" />
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
        </Toolbar>
      </Container>
    </Container>
  );
};
