import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, TextField, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.10)"

  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGird: {
    marginTop: theme.spacing(4)
  }

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start"
              color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Biden Winner
          </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log In to see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button onClick={handleClickOpen} color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost} style={{ backgroundImage: `url(https://media.gq.com/photos/5db050ea9a6db20008f5f350/16:9/w_2560%2Cc_limit/GettyImages-1131449761.jpg)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid Container>
              <Grid item md={6}>

                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h1" variant="h3" color="primery" gutterBottom>
                    <p>Joseph</p> Robinette <p>Biden Jr.</p>
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Want to know what's next...?
                    </Typography>
                  <Button variant="contained" color="secondary">
                    SEE Next
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography varinat="h2" align="center" color="textPrimary" gutterBottom>

            </Typography>
            <Typography varinat="h5" align="center" color="textSecondary" paragraph gutterBottom>

            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={6} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Start now</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Learn more</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/featured/?{j.biden}"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                          </Typography>
                    <Typography>
                      Blog post.  Blog post. Blog post. Blog post. Blog post.
                          </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                          </Button>
                    <Button size="small" color="primary">
                      Edit
                          </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h5" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />

        </BottomNavigation>
        <Typography align="center" color="textSecondary" cpmponent="p" variant="subtitle1" >
          USA
        </Typography>
      </footer>

    </>

  );
}

export default App;
