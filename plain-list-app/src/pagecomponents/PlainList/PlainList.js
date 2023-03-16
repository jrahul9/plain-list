import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PLAIN_LIST } from "../../store/plainList/actions";
import PlainListItem from "./components/PlainListItem";

const PlainList = () => {
    const plainList = useSelector((state) => state.plainList.data);
    const plainListError = useSelector((state) => state.plainList.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GET_PLAIN_LIST })
    }, [dispatch]);


    if (plainListError) {
        return (
            <div>Fail to fetch data: {plainListError}</div>
        )
    }

    if (!plainList) {
        return (
            <div>Loading...</div>
        )
    }

    const getData = () => {
        if (!plainList || plainList.length == 0) {
            return []
        }
        const billingOptiosMap = plainList.reduce((acc, item) => {
            if (acc[item.billing_options]) {
                if (acc[item.billing_options].expected_annually_bill_amount > item.expected_annually_bill_amount) {
                    acc[item.billing_options] = item;
                }
                //acc[item.billing_options].push(item);
            } else {
                acc[item.billing_options] = item;
            }

            return acc;
        }, {});
        let res = [];
        console.log('billingOptiosMap', billingOptiosMap);
        // Object.values(billingOptiosMap).forEach((items) => {
        //     if (items.length > 1) {
        //         let minIndex = 0;
        //         for (let itr = 1; itr < items.length; itr++) {
        //             if (items[itr - 1].expected_annually_bill_amount > items[itr].expected_annually_bill_amount) {
        //                 minIndex = itr;
        //             }
        //         }

        //         res.push(items[minIndex]);
        //     } else {
        //         res.push(items[0]);
        //     }
        // });
        console.log('res', res);
        return Object.values(billingOptiosMap);
    }

    let filteredData = getData();

    return (
        <Box padding={2}>
            <Box>
                <div className="d-flex justify-content-between py-2">
                    <div>
                        <Chip label="Electricity" color="primary" />
                    </div>
                    <div>
                        <Chip label="Filter" color="primary" />
                    </div>
                </div>
                <div>
                    <Typography>Initial recommendations are based on average medium usage as determined by relevant energy regulators.</Typography>
                </div>
            </Box>
            <Box>
                {filteredData && filteredData.map && filteredData.map((data) => {
                    return (
                        <PlainListItem data={data} key={data.id} />
                    );
                })}
            </Box>
        </Box>
    )

}

export default PlainList;