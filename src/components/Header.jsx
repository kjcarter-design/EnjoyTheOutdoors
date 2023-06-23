import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { PAGE_PATHS } from '../constants';
import Logo from '../assets/TheSummitSeekers.svg';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Mountains', 'National Parks'];
const settings = ['Profile', 'Account', 'Logout'];

function Header() {
	const [anchorElNav, setAnchorElNav] = useState();
	const [anchorElUser, setAnchorElUser] = useState();
	const navigate = useNavigate();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (e) => {
		console.log(e.target.innerHTML);
		if (e.target.innerHTML === pages[0]) {
			navigate(PAGE_PATHS.MOUNTAINS);
		} else if (e.target.innerHTML === pages[1]) {
			navigate(PAGE_PATHS.PARKS_SEARCH);
		}
		setAnchorElNav();
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleMountainsClick = () => {
		navigate(PAGE_PATHS.MOUNTAINS);
	};

	const handleParksClick = () => {
		navigate(PAGE_PATHS.PARKS_SEARCH);
	};

	return (
		<AppBar
			sx={{ top: { md: '0px', xs: 'auto' }, bottom: { xs: '0px', md: 'auto' } }}
		>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					sx={{ padding: '0', justifyContent: 'space-between' }}
				>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<img
						src={Logo}
						alt='Logo'
						style={{ height: '40px', marginRight: '10px' }}
					/>
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							flexGrow: 0.05,
							fontFamily: 'roboto',
							fontWeight: 100,
							letterSpacing: '.2rem',
							color: 'inherit',
							textDecoration: 'none',
							fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
						}}
					>
						The Summit Seekers
					</Typography>
					<Box
						sx={{
							justifyContent: 'center',
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<Box
							sx={{
								display: { xs: 'none', md: 'flex' },
								flexDirection: 'row',
							}}
						>
							<Button
								onClick={handleMountainsClick}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Mountains
							</Button>
							<Button
								onClick={handleParksClick}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								National Parks
							</Button>
						</Box>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								onClose={handleCloseUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'flex', md: 'none' }
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;
