import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import $ from "jquery";
import "datatables.net";
const TransactionTable = ({ collectionName }) => {
    const [transactions, setTransactions] = useState([]);
    // const [activeAccordion, setActiveAccordion] = useState(null);
    const [roleFunc, setRoleFunc] = useState([]);
    function timestampToDate(a) {
        const timestamp = Number(a);
        const dateObject = new Date(timestamp);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        const hours = String(dateObject.getHours()).padStart(2, '0');
        const minutes = String(dateObject.getMinutes()).padStart(2, '0');
        const seconds = String(dateObject.getSeconds()).padStart(2, '0');
        const formattedTime = `${day}-${month}-${year}- ${hours}:${minutes}:${seconds}`;
        return formattedTime;
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/${collectionName}/transactions`);
                console.log(response.data);
                const transactionsWithDetails = [];

                // Iterate over the response data
                for (const item of response.data) {
                    const roleFunction = item.roleFunction;
                    const transactions = item.transactions;

                    // Fetch transaction details for each transaction
                    const transactionsWithDetailsPromise = transactions.map(async (transaction) => {
                        const details = await getTransactionDetails(transaction.transactionHash);
                        const timevar=timestampToDate(details.timestamp);
                        // console.log(details);
                        return {
                            roleFunction: roleFunction,
                            transactionHash: transaction.transactionHash,
                            timestamp:details.timestamp,
                            from: details.from, // Include 'from' property
                            date: timevar, // Include 'date' property
                            gasUsed: details.gasUsed, // Include 'gasUsed' property
                            status: details.status, // Include 'status' property
                            blockHash: details.blockHash, // Include 'blockHash' property
                            blockNumber: details.blockNumber, // Include 'blockNumber' property
                            cumulativeGasUsed: details.cumulativeGasUsed,
                        };
                    });
                    const transactionsWithDetailsBatch = await Promise.all(transactionsWithDetailsPromise);
                    transactionsWithDetails.push(...transactionsWithDetailsBatch);
                }
                
                transactionsWithDetails.sort((a, b) => b.timestamp - a.timestamp);
                console.log(transactionsWithDetails);
                // Rest of your code

                // setRoleFunc(transactionsWithDetails[0].roleFunction); // Assuming the roleFunction is the same for all transactions
                setTransactions(transactionsWithDetails);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }

        };


        fetchData();
    }, [collectionName]);
    // useEffect(() => {
    //     if(transactions.length>0){
    //         $('#myTable5').DataTable();
    // }
    // },[transactions]);
    // const toggleAccordion = (index) => {
    //     setActiveAccordion(index === activeAccordion ? null : index);
    //   };

    const getTransactionDetails = async (txHash) => {
        try {
            const web3 = new Web3("http://localhost:7545");
            const receipt = await web3.eth.getTransactionReceipt(txHash);

            if (receipt) {
                const block = await web3.eth.getBlock(receipt.blockNumber);
                const timestamp = Number(block.timestamp) * 1000;
                receipt.timestamp = timestamp;
                return receipt;
            } else {
                throw new Error('Transaction receipt not found');
            }
        } catch (error) {
            console.error('Error fetching transaction details:', error);
            return null;
        }
    };

    return (
      <div className=" text-center    container">
      <h1 className=" text-center  ">Transaction Details - {collectionName}</h1>
      <br />

      <div className=" container accordion  col-7  justify-content-center align-items-center" id="transactionAccordion">
        {transactions.map((transaction, index) => (
          <div className="accordion-item" key={transaction.transactionHash}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                <span className="me-3" style={{ maxWidth: '80%' }}>{transaction.roleFunction}</span>
                <span className="ms-3">Gas Used: {transaction.gasUsed.toString()}</span>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body">
                <p className="mb-2"><strong>Transaction Hash:</strong> <span className="text-wrap text-break">{transaction.transactionHash}</span></p>
                <p className="mb-2"><strong>From:</strong> <span className="text-wrap text-break">{transaction.from}</span></p>
                <p className="mb-2"><strong>Date:</strong> {transaction.date.toLocaleString()}</p>
                <p className="mb-2"><strong>Gas Used:</strong> {parseInt(transaction.gasUsed)}</p>
                <p className="mb-2"><strong>Status:</strong> {parseInt(transaction.status)}</p>
                <p className="mb-2"><strong>Block Hash:</strong> <span className="text-wrap text-break">{transaction.blockHash}</span></p>
                <p className="mb-2"><strong>Block Number:</strong> {parseInt(transaction.blockNumber)}</p>
                <p className="mb-2"><strong>Cumulative Gas Used:</strong> {parseInt(transaction.cumulativeGasUsed)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default TransactionTable;
