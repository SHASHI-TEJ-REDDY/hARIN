// import React, { useEffect, useState } from "react";
// import Web3Connector from "./Web3Connector";
// import Web3 from "web3";
// const Verifying = () => {
//   const [patches, setPatches] = useState([]);
//   const [account, setAccount] = useState("");
//   const [contract1, setContract1] = useState(null);
//   const [contractStatus, setContractStatus] = useState("");

//   useEffect(() => {
//     const fetchPatches = async () => {
//       if (contract1) {
//         console.log(contract1.methods);
//       const fetchedPatches = await contract1.methods.getpatches().call();
//       setPatches(fetchedPatches);
//       console.log(fetchedPatches);
//       }
//     };
//     fetchPatches();
//   }, [contract1]);

//   const handleApprove = async (patchId) => {
//     await contract1.methods.vadd(patchId).send({ from: account });
//     alert("Successfully Updated");
//     // window.location.reload();
//   };

//   const handleReject = async (patchId) => {
//     await contract1.methods.rvadd(patchId).send({ from: account });
//     alert("Successfully Updated");
//     // window.location.reload();
//   };

//   const handleDownload = async (patchLink, patchFilename) => {
//     const data = await contract1.methods.gettxt(patchLink).call();
//     const blob = new Blob([new Uint8Array(Web3.utils.hexToBytes(data))], {
//       type: "application/octet-stream",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = patchFilename;
//     document.body.appendChild(a);
//     a.click();
//   };

//   return (
//     <>
//     <Web3Connector
//           setAccount={setAccount}
//           setContract={setContract1} // Update the contract1 state value
//           setContractStatus={setContractStatus}
//         />
//     <div className="container border border-secondary p-3">
//       <div id="cards">
//         {patches.map((patch) => {
//           if (patch.verstat !== "Inprogress") {
//             return null;
//           }

//           return (
//             <div className="card my-3" key={patch.patchid}>
//               <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                   <h6 className="card-title">{`Patch_No: ${patch.patchversion}`}</h6>
//                   <div className="d-flex justify-content-between">
//                     <button
//                       className="btn mx-3 btn-primary"
//                       onClick={() => handleApprove(patch.patchid)}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       className="btn mx-3 btn-danger"
//                       onClick={() => handleReject(patch.patchid)}
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-6 col-sm-4 col-md-6">
//                   <table className="table table-borderless">
//                     <tbody>
//                       {[
//                         "patchid",
//                         "patchfilename",
//                         "patchversion",
//                         "patchplatform",
//                         "timestamp",
//                         "features",
//                       ].map((i) => (
//                         <tr key={i}>
//                           <td>{`${i} :`}</td>
//                           <td>
//                             {i === "timestamp"
//                               ? new Date(patch[i] * 1000).toLocaleString()
//                               : patch[i]}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <button
//                   className="btn btn-light"
//                   onClick={() =>
//                     handleDownload(patch.patchlink, patch.patchfilename)
//                   }
//                 >
//                   Download ({patch.patchfilename})
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Verifying;
import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import Web3 from "web3";
import { Web3Storage } from 'web3.storage';
import axios from "axios";

const Verifying = () => {
    const [patches, setPatches] = useState([]);
    const [account, setAccount] = useState("");
    const [contract1, setContract1] = useState(null);
    const [contractStatus, setContractStatus] = useState("");
    const [showRejectReason, setShowRejectReason] = useState(false);
    const [rejectReason, setRejectReason] = useState("");
    const [rejectError, setRejectError] = useState("");
    const [patchid, setPatchid] = useState(null);
    const [patchname, setPatchname] = useState(null);


    useEffect(() => {
        const fetchPatches = async () => {
            if (contract1) {
                const fetchedPatches = await contract1.methods.getpatches().call();
                setPatches(fetchedPatches);
                console.log(fetchedPatches);
            }
        };
        fetchPatches();
    }, [contract1]);

    const handleApprove = async (patchId) => {
        try {
            const result = await contract1.methods.vadd(patchId).send({ from: account });
            await axios.post('http://localhost:5001/verifier/transactions', { roleFunction: "verifier-approve", transactionHash: result.transactionHash });
            console.log('Transaction added successfully');
            alert("Successfully Updated");
        }
        catch (error) {
            console.error(error);
        }
        window.location.reload();
    };

    // const handleReject = async (patchId) => {
    //   setShowRejectReason(!showRejectReason);
    //   const result1 = await contract1.methods.rvadd(patchId,rejectReason).send({ from: account });
    //   alert("Successfully Updated");
    //   console.log()
    //   await axios.post('http://localhost:5001/verifier/transactions', { roleFunction: "verifier-reject", transactionHash: result1.transactionHash });
    //   console.log('Transaction added successfully');
    //   // window.location.reload();
    // };
    const handleReject = async (patchId, patch) => {
        setShowRejectReason(!showRejectReason);
        setPatchid(patchId);
        setPatchname(patch);
        // window.location.reload();
    };

    const getAccessToken = () => {
        // Insert your API token here as a string
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE4MTRlMTIyMkVhNThFOTE4Q2Q5QzhFMDUzMTkwMzIwYWU4MzZiZjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc4NDM0ODg4OTUsIm5hbWUiOiJoYXJpbmF0aCJ9.2CYsF3tVltDOtg5qVD5FCfE-uEh0n4Lbb8bTs0bCqto';

    };

    const makeStorageClient = () => {
        return new Web3Storage({ token: getAccessToken() });
    };
    async function downloadFile(cid) {
        const client = makeStorageClient();
        const res = await client.get(cid);
        const files = await res.files();
        if (files.length > 0) {
            const file = files[0];
            const downloadUrl = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = file.name;
            link.click();
            URL.revokeObjectURL(downloadUrl);
        }
    }

    const handleDownload = async (patchLink) => {
        if (patchLink) {
            try {
                console.log(patchLink);
                await downloadFile(patchLink);
            } catch (error) {
                console.error('Failed to download file:', error);
            }
        }
    };
    const handleRejectSubmit = async (patchId) => {
        if (!rejectReason) {
            alert("Please enter a rejection reason.");
            return;
        }
        console.log(patchId, rejectReason);
        try {
            const result1 = await contract1.methods.rvadd(patchId, rejectReason).send({ from: account });
            console.log();
            await axios.post('http://localhost:5001/verifier/transactions', { roleFunction: "verifier-reject", transactionHash: result1.transactionHash });
            console.log('Transaction added successfully');
        }
        catch (error) {
            console.error(error);
        }

        window.location.reload();
    };

    return (
        <>
            <div className="modal fade" id="example" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Verifying ..."{patchname}"</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body   justify-content-center row-1">
                            {/* <p className="mx-2 p-1 ">mention treason</p> */}
                            <input
                                type="text"
                                className="form-control "
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                                placeholder="Enter rejection reason"
                            />
                            <button className="btn btn-primary float-end my-2" type="button" onClick={() => handleRejectSubmit(patchid)}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Web3Connector
                setAccount={setAccount}
                setContract={setContract1} // Update the contract1 state value
                setContractStatus={setContractStatus}
            />
            <div className="container border border-secondary p-3">
                <div id="cards">
                    {patches.map((patch) => {
                        if (patch.verstat !== "Inprogress") {
                            return null;
                        }

                        return (
                            <div className="card my-3" key={patch.patchid}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="card-title">{`Patch_No: ${patch.patchversion}`}</h6>
                                        <div className="d-flex justify-content-between">
                                            <button
                                                className="btn mx-3 btn-primary"
                                                onClick={() => handleApprove(patch.patchid)}
                                            >
                                                Approve
                                            </button>

                                            <button
                                                className="btn mx-3 btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#example"
                                                onClick={() => handleReject(patch.patchid, patch.patchfilename)}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-6">
                                        <table className="table table-borderless">
                                            <tbody>
                                                {[
                                                    "patchid",
                                                    "patchfilename",
                                                    "patchversion",
                                                    "patchplatform",
                                                    "timestamp",
                                                    "features",
                                                ].map((i) => (
                                                    <tr key={i}>
                                                        <td>{patch[i]}</td>
                                                        {/* <td>
                              {i === "timestamp"
                                ? new Date(patch[i] * 1000).toLocaleString()
                                : patch[i]}
                            </td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <button
                                        className="btn btn-light"
                                        onClick={() =>
                                            handleDownload(patch.patchlink, patch.patchfilename)
                                        }
                                    >
                                        Download ({patch.patchfilename})
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Verifying;
