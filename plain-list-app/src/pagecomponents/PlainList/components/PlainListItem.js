import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './index.css';

const PlainListItem = ({ data }) => {

    return (
        <Card className="mt-4">
            <CardHeader
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                }}
            />
            <CardContent>
                <Box mt={2}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} sm={4} >
                            <div className="align-items-center d-flex flex-column">
                                <img src={data.provider_image} alt="img" className="w-50" />
                                <Button>View Details</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} direction="row" justifyContent="center" alignItems="center">
                            <div>
                                <div className="p-2 text-bg-secondary custom-center-item">
                                    <Typography >{data?.dmo_percentage?.Ausgrid}</Typography>
                                    <Typography>the current refernece price</Typography>
                                </div>
                                <Typography className="text-center">
                                    <span className="d-inline-block mx-1">-12 Month Energy Plan Period</span>
                                    <span className="d-inline-block mx-1">-No Lock in contract</span>
                                    <span className="d-inline-block mx-1">-No Lock in contract</span>
                                    <span className="d-inline-block mx-1">-No Lock in contract</span>
                                </Typography>
                                <Typography className="custom-center-item text-bg-info p-1">Standard feed in tariff: Sc</Typography>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} direction="row" justifyContent="center" alignItems="center">
                            <div className="p-1 rounded-top custom-center-item" style={{ width: "200px" }}>
                                <div className="bg-primary p-1">Estimated cost</div>
                                <div className="bg-info p-2">
                                    <Typography><span className="h2 font-weight-bold">${data?.expected_annually_bill_amount}^</span>/yr</Typography>
                                    <Typography>${data?.expected_monthly_bill_amount}^/mo</Typography>
                                </div>
                            </div>
                            <div>
                                <p>Billing options: {data.billing_options}</p>
                                <p>Expected : {data.expected_annually_bill_amount}</p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    mt={2}
                >
                    <Typography color="text.primary" dangerouslySetInnerHTML={{ __html: data?.dmo_content.Ausgrid }}>
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained">
                    Connect Online Today
                </Button>
            </CardActions>
        </Card>
    );
};

export default PlainListItem;