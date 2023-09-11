"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "~/components/Atoms/Box";
import Paper from "~/components/Atoms/Paper";
import { Text } from "~/components/Atoms/Text";
import { useFormik } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react";
import { LoginResponseModelType, StoreContext } from "~/src/models";
import { CustomCheckbox, UploadImage } from "~/components/molecules/inputField";
import { Button } from "~/components/Atoms/Button";
import axios from "axios";
import { CircularProgress } from "~/components/Atoms/Loading";
import theme from "~/theme";
import { ToastSuccessMessage, ToastWarnMessage } from "~/utilis/toastMessage";
import { FiDownload } from "react-icons/fi";
import { handleDownloadImages } from "~/utilis/handleDowloadImage";
import Link from "next/link";
import UpdateDocsPopupBox from "~/containers/UpdateDocs";

const UploadDocuments = () => {
  const [docData, setDocData] = useState<any>();
  const store = useContext(StoreContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [docLoading, setDocLoading] = useState(false);
  const userProfile: any = store.loggedInUser?.requestedProfile; // ?.split('-')
  // const userProfile: any =  'ESTATE-EXPORTER'.split('-');
  const documentLabels = userProfile?.map(
    (part: any) => `${part}_document`
  ) as string[];

  const validationSchema = Yup.object().shape({
    files: Yup.array()
      .of(
        Yup.object().shape({
          documentType: Yup.string(),
          file: Yup.mixed().required("File is required"),
        })
      )
      .min(1, "Document Required"),
    checkCondition: Yup.boolean().oneOf([true], "Accept Terms And Conditions"),
  });

  useEffect(() => {
    getDocuments();
  }, [store.loggedInUser.userProfileStatus === "PENDING_VERIFIED"]);

  const getDocuments = async () => {
    setDocLoading(true);
    try {
      const getallVerify = await store.queryAllVerifys(
        {
          offset: 0,
          limit: 10,
          where: {
            user: {
              is: store.loggedInUser.id
            }
          }
        },
        `docs {
          id
          user {
            email
            name
            id
          }
          documentType
          file {
            id
            recordType
            status
            originalName
            mimeType
            extension
            size
            location
          }
          status
        }
    `,
        {
          fetchPolicy: "network-only",
        }
      );
      setDocData(getallVerify?.allVerifys?.docs);
      setDocLoading(false);
    } catch (error) {
      setDocLoading(false);
      ToastWarnMessage("NetWork Error Please try again");
    }
  };

  console.log(docData, "updated");

  const onSubmit = async (inputs: any) => {
    setError("");
    setLoading(true);
    const userId: any = store.loggedInUser.id;
    try {
      for (const fileObj of inputs.files) {
        if (fileObj.file) {
          const formData = new FormData();
          formData.append("documents", fileObj.file);
          formData.append("documentType", fileObj.documentType);
          formData.append("requestType", "Verify");
          formData.append("requestId", userId);

          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://65.0.97.154"
            }/uploadDocs`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log("API response:", response.data);
        }
      }

      const logginData: any = {
        id: store.loggedInUser.id,
        key: store.loggedInUser.key,
        msg: store.loggedInUser.msg,
        name: store.loggedInUser.name,
        status: store.loggedInUser.status,
        requestedProfile: store.loggedInUser.requestedProfile,
        userProfile: store.loggedInUser.userProfile,
        userProfileStatus: "PENDING_VERIFIED",
        userRole: store.loggedInUser.userRole,
        __typename: store.loggedInUser.__typename,
      };

      store.setLoggedInUser(logginData as LoginResponseModelType);
      setLoading(false);
      ToastSuccessMessage("Document Upload Successful !!");
    } catch (error) {
      setLoading(false);
      console.error("API error:", error);
      setError("Something went wrong. Please try again later.");
      return error;
    }
  };

  const formik = useFormik({
    initialValues: {
      files: [],
      checkCondition: false,
    },
    validationSchema,
    onSubmit,
  });

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    document: string
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const updatedDocuments: any = [...formik.values.files];
      updatedDocuments[index] = { documentType: document, file: file };
      formik.setFieldValue("files", updatedDocuments);
    }
  };

  return (
    <Paper
      display="grid"
      placeItems="center"
      style={{ minHeight: `calc(100vh - 270px)` }}
      elevation={1}
    >
      {store.loggedInUser.userProfileStatus === "APPROVED" && (
        <Text size="xxlarge" weight="xlarge">
          Welcome to DashBoard !!!
        </Text>
      )}
      {store.loggedInUser.userProfileStatus === "PENDING" && (
        <Box
          display="grid"
          placeItems="center"
          gap="30px"
          textAlign="start"
          alignItems="center"
        >
          <Text size="large" weight="large" textAlign="center">
            Please Upload Documents For Verification <br />
            {store.loggedInUser.userProfile}
          </Text>
          <form onSubmit={formik.handleSubmit}>
            {error && <Text color={theme.colors.redA}>{error}</Text>}
            <Box
              display="flex"
              flexDirection="column"
              gap="20px"
              alignItems="center"
            >
              {documentLabels?.map((document: string, index: number) => (
                <Box
                  display="flex"
                  key={document}
                  alignItems="end"
                  flexWrap="wrap"
                >
                  <Text weight="large" width="180px">
                    {document} &nbsp; :
                  </Text>
                  <UploadImage
                    id={document.toLowerCase().replace("", "")}
                    name={document}
                    type="file"
                    // label={document}
                    error={formik.touched.files}
                    errorMessage={formik.errors.files}
                    onChange={(event) =>
                      handleImageChange(event, index, document)
                    }
                  />
                </Box>
              ))}
              <Box height="30px">
                <Box display="flex" gap="10px" alignItems="center">
                  <Box minWidth="30px">
                    <CustomCheckbox
                      label=""
                      checked={formik.values.checkCondition}
                      possible={true}
                      onChange={() =>
                        formik.setFieldValue(
                          "checkCondition",
                          !formik.values.checkCondition
                        )
                      }
                    />
                  </Box>
                  <Text>
                    {" "}
                    I Accept Terms And Conditions{" "}
                    <Link href="" target="_blank" style={{ cursor: "pointer" }}>
                      <Text color={theme.colors.secondary}>Click Here</Text>
                    </Link>
                  </Text>
                </Box>
                {formik.touched.checkCondition &&
                  formik.errors.checkCondition && (
                    <Text size="small" style={{ color: "red" }}>
                      {formik.errors.checkCondition}
                    </Text>
                  )}
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              style={{
                marginTop: "70px",
                pointerEvents: loading ? "none" : "auto",
                opacity: loading ? 0.8 : 1,
              }}
            >
              <Button variant="primary" type="submit" width="200px">
                {loading ? (
                  <CircularProgress color={theme.colors.whiteA} />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </form>
        </Box>
      )}

      {store.loggedInUser.userProfileStatus === "PENDING_VERIFIED" && (
        <>
          {docLoading ? (
            <CircularProgress />
          ) : (
            <Box
              display="grid"
              placeItems="center"
              width="400px"
              gap="30px"
              textAlign="center"
            >
              <Text size="xlarge" weight="xlarge">
                Document Upload Successful Waiting For Admin Approval
              </Text>
              <Text size="large" weight="large">
                Uploaded Documents
              </Text>
              {docData?.map((document: any, index: number) => (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  gap="10px"
                >
                  <Text width="210px">{document.documentType}</Text>
                  <Link
                    href={document.file.location}
                    target="_blank"
                    onClick={() =>
                      handleDownloadImages(
                        document?.file?.location,
                        document.documentType
                      )
                    }
                  >
                    <FiDownload color={theme.colors.blackA} fontSize="24px" />
                  </Link>
                  {/* <UpdateDocsPopupBox document={document?.documentType} onClick='' id=''/> */}
                </Box>
              ))}
              <UploadImage
                id="newdocument"
                name="New Document"
                type="file"
                label="New Document"
              // error={formik.touched.files}
              // errorMessage={formik.errors.files}
              // onChange={(event) => handleImageChange(event, index, document)}
              />
              <br />
            </Box>
          )}
        </>
      )}
    </Paper>
  );
};

export default observer(UploadDocuments);
