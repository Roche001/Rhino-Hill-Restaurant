import React from "react";
import "./Top.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
const style = {
  position: "absolute",
  top: "29.5%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "99%",
  height: "30vh",
  background: "#813b0a",
  border: "2px solid #000",

  p: 4,
};
const Top = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="nav-var">
      <div className="navbar">
        <div className="nav-brand">
          <Link to="/">
            <img src="./assets/mex.png" alt="Logo" />
          </Link>
        </div>
        <div className="nav-text">
          <Link to="/" className="link color active">
            <h5>Home</h5>
          </Link>
          <Link to="/Popular" className="link color">
            <h5>Popular</h5>
          </Link>
          <Link to="/Shop" className="link color">
            <h5>Shop</h5>
          </Link>{" "}
          <Link to="/Reservation" className="link color">
            <h5>Reservation</h5>
          </Link>
          <Link to="/Account" className="link color">
            <h5>Gallery</h5>
          </Link>
          <Link to="/Contacts" className="link color">
            <h5>Contacts</h5>
          </Link>
        </div>
        <div className="head-bar">
          <Button onClick={handleOpen}>
            {" "}
            <h3>
              <AiOutlineBars />
            </h3>
          </Button>{" "}
        </div>
      </div>
      <div>
        {" "}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="nav-mode">
                <Link to="/" className="link mean">
                  <h5>Home</h5>
                </Link>
                <Link to="/Popular" className="link mean">
                  <h5>Popular</h5>
                </Link>
                <Link to="/Shop" className="link mean">
                  <h5>Shop</h5>
                </Link>{" "}
                <Link to="/Reservation" className="link mean">
                  <h5>Reservation</h5>
                </Link>
                <Link to="/Account" className="link mean">
                  <h5>Gallery</h5>
                </Link>
                <Link to="/Contacts" className="link mean">
                  <h5>Contacts</h5>
                </Link>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Top;
