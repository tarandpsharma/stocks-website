import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Box } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Slider from "@mui/material/Slider";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./stockSlice/stockSlice";
const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.stock.value);
  console.log(value, "ersff");
  const PrettoSlider = styled(Slider)({
    color: "#52af77",
    height: 14,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      display: "none",
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        dispatch(addItem(data));
        console.log(data, "gggfgfgfgf");
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {value.map((val: any, index: any) => {
        
        return (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className="isbvisou"
                >
                  <TableCell
                    align="center"
                    className="tcell"
                    style={{ padding: "6px" }}
                  >
                    <Card
                      sx={{ maxWidth: 345, height: "8rem" }}
                      className="pad"
                    >
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <div className="div1">
                            <div>
                              <DehazeIcon />
                            </div>
                            <div className="divdd">
                              <h4 className="div">{val.scrip} </h4>
                              <span className="span1"> {val.quantity}</span>
                            </div>
                            <div className="ty2">
                              <h4 className="header"> iShares </h4>
                              <span className="span2"> by BlackRock</span>
                              <p className="h2">
                                {" "}
                                S&P 500 Index <span> US Equality</span>
                              </p>
                            </div>
                          </div>
                        </Typography>
                        <Box component={"div"} color="text.secondary"></Box>
                      </CardContent>
                    </Card>
                  </TableCell>
                  <TableCell align="center" style={{ padding: "6px" }}>
                    <Card sx={{ maxWidth: 345, height: "8rem" }}>
                      <CardContent>
                        <div>
                          <div className="div4">
                            <span className="span5">
                              {" "}
                              <AllInboxIcon /> Quantity
                            </span>
                            <span className="span4"> {val.quantity} </span>
                          </div>
                          <div className="div4">
                            <span className="span5">
                              {" "}
                              <AlternateEmailIcon /> Avg. Cost
                            </span>
                            <span className="span4"> {val.avg_cost} </span>
                          </div>

                          <div className="div4">
                            <span className="span5">
                              {" "}
                              <CurrencyBitcoinIcon /> Invested Amount
                            </span>{" "}
                            <span className="span4">
                              {" "}
                              {val.invested_amount}{" "}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TableCell>
                  <TableCell align="center" style={{ padding: "6px" }}>
                    <Card sx={{ maxWidth: 345, height: "8rem" }}>
                      <CardContent>
                        <div>
                          <div className="div4">
                            <span className="span5"> Market Value </span>
                            <span className="span4">
                              {" "}
                              {val.invested_amount}{" "}
                            </span>
                          </div>
                          <div className="div4">
                            <span className="span5">
                              {" "}
                              % 0f portfolio Value{" "}
                            </span>
                            <span className="span4">
                              {" "}
                              {val.portfolio_percentage}{" "}
                            </span>
                          </div>
                          <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            defaultValue={20}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TableCell>
                  <TableCell align="center" style={{ padding: "6px" }}>
                    <Card sx={{ maxWidth: 345, height: "8rem" }}>
                      <CardContent>
                        <div>
                          <div className="div4">
                            <span className="span5"> Unrealized P/L </span>
                            <span className="span4"> {val.unrealized_PL} </span>
                          </div>
                          <div className="div4">
                            <span className="span5">
                              {" "}
                              % 0f portfolio Value{" "}
                            </span>
                            <span className="span4">
                              {" "}
                              {val.return_percentage}{" "}
                            </span>
                          </div>
                          {/* <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20} className="sl"
                      /> */}
                          <div className="div8">
                            {val.return_percentage >= 0 ? (
                              <div
                                className="div6"
                                style={{ width: `${val.return_percentage}%` }}
                              >
                              </div>
                              
                            ) : (
                              
                              <div
                                className="div9"
                                style={{ width: `${val.return_percentage}%`}}
                              >
                                
                              </div>
                              
                            )}
                                <div className="div11"> </div>

                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TableCell>

                  <TableCell
                    align="center"
                    className="carddd"
                    style={{ padding: "6px" }}
                  >
                    <Card sx={{ maxWidth: 345, height: "8rem" }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <Button
                            variant="outlined"
                            style={{
                              borderColor: "red",
                              color: "red",
                              marginTop: "10px",
                            }}
                          >
                            Buy
                          </Button>
                        </Typography>
                        <Typography variant="body2" className="cardbtn">
                          <Button
                            variant="outlined"
                            style={{ borderColor: "red", color: "red" }}
                          >
                            Sell
                          </Button>
                        </Typography>
                      </CardContent>
                    </Card>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        );
      })}
    </>
  );
};

export default App;
