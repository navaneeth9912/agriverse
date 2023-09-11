/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { VerifyOtpResponseModel, VerifyOtpResponseModelType } from "./VerifyOtpResponseModel"
import { verifyOtpResponseModelPrimitives, VerifyOtpResponseModelSelector } from "./VerifyOtpResponseModel.base"
import { FilterProductResponseModel, FilterProductResponseModelType } from "./FilterProductResponseModel"
import { filterProductResponseModelPrimitives, FilterProductResponseModelSelector } from "./FilterProductResponseModel.base"
import { OrderLineDataModel, OrderLineDataModelType } from "./OrderLineDataModel"
import { orderLineDataModelPrimitives, OrderLineDataModelSelector } from "./OrderLineDataModel.base"
import { QuoteLineResponseModel, QuoteLineResponseModelType } from "./QuoteLineResponseModel"
import { quoteLineResponseModelPrimitives, QuoteLineResponseModelSelector } from "./QuoteLineResponseModel.base"
import { ImageModel, ImageModelType } from "./ImageModel"
import { imageModelPrimitives, ImageModelSelector } from "./ImageModel.base"
import { ProductAttributeDataModel, ProductAttributeDataModelType } from "./ProductAttributeDataModel"
import { productAttributeDataModelPrimitives, ProductAttributeDataModelSelector } from "./ProductAttributeDataModel.base"
import { OtpResponseModel, OtpResponseModelType } from "./OtpResponseModel"
import { otpResponseModelPrimitives, OtpResponseModelSelector } from "./OtpResponseModel.base"
import { ResponseModel, ResponseModelType } from "./ResponseModel"
import { responseModelPrimitives, ResponseModelSelector } from "./ResponseModel.base"
import { LoginResponseModel, LoginResponseModelType } from "./LoginResponseModel"
import { loginResponseModelPrimitives, LoginResponseModelSelector } from "./LoginResponseModel.base"
import { UserPaginationModel, UserPaginationModelType } from "./UserPaginationModel"
import { userPaginationModelPrimitives, UserPaginationModelSelector } from "./UserPaginationModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { FinancePaginationModel, FinancePaginationModelType } from "./FinancePaginationModel"
import { financePaginationModelPrimitives, FinancePaginationModelSelector } from "./FinancePaginationModel.base"
import { FinanceModel, FinanceModelType } from "./FinanceModel"
import { financeModelPrimitives, FinanceModelSelector } from "./FinanceModel.base"
import { ProfilePaginationModel, ProfilePaginationModelType } from "./ProfilePaginationModel"
import { profilePaginationModelPrimitives, ProfilePaginationModelSelector } from "./ProfilePaginationModel.base"
import { ProfileModel, ProfileModelType } from "./ProfileModel"
import { profileModelPrimitives, ProfileModelSelector } from "./ProfileModel.base"
import { UnitPaginationModel, UnitPaginationModelType } from "./UnitPaginationModel"
import { unitPaginationModelPrimitives, UnitPaginationModelSelector } from "./UnitPaginationModel.base"
import { UnitModel, UnitModelType } from "./UnitModel"
import { unitModelPrimitives, UnitModelSelector } from "./UnitModel.base"
import { CategoryPaginationModel, CategoryPaginationModelType } from "./CategoryPaginationModel"
import { categoryPaginationModelPrimitives, CategoryPaginationModelSelector } from "./CategoryPaginationModel.base"
import { CategoryModel, CategoryModelType } from "./CategoryModel"
import { categoryModelPrimitives, CategoryModelSelector } from "./CategoryModel.base"
import { ProductPaginationModel, ProductPaginationModelType } from "./ProductPaginationModel"
import { productPaginationModelPrimitives, ProductPaginationModelSelector } from "./ProductPaginationModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { productModelPrimitives, ProductModelSelector } from "./ProductModel.base"
import { VerifyPaginationModel, VerifyPaginationModelType } from "./VerifyPaginationModel"
import { verifyPaginationModelPrimitives, VerifyPaginationModelSelector } from "./VerifyPaginationModel.base"
import { VerifyModel, VerifyModelType } from "./VerifyModel"
import { verifyModelPrimitives, VerifyModelSelector } from "./VerifyModel.base"
import { FilePaginationModel, FilePaginationModelType } from "./FilePaginationModel"
import { filePaginationModelPrimitives, FilePaginationModelSelector } from "./FilePaginationModel.base"
import { FileModel, FileModelType } from "./FileModel"
import { fileModelPrimitives, FileModelSelector } from "./FileModel.base"
import { LeadPaginationModel, LeadPaginationModelType } from "./LeadPaginationModel"
import { leadPaginationModelPrimitives, LeadPaginationModelSelector } from "./LeadPaginationModel.base"
import { LeadModel, LeadModelType } from "./LeadModel"
import { leadModelPrimitives, LeadModelSelector } from "./LeadModel.base"
import { LeadLinePaginationModel, LeadLinePaginationModelType } from "./LeadLinePaginationModel"
import { leadLinePaginationModelPrimitives, LeadLinePaginationModelSelector } from "./LeadLinePaginationModel.base"
import { LeadLineModel, LeadLineModelType } from "./LeadLineModel"
import { leadLineModelPrimitives, LeadLineModelSelector } from "./LeadLineModel.base"
import { QuotePaginationModel, QuotePaginationModelType } from "./QuotePaginationModel"
import { quotePaginationModelPrimitives, QuotePaginationModelSelector } from "./QuotePaginationModel.base"
import { QuoteModel, QuoteModelType } from "./QuoteModel"
import { quoteModelPrimitives, QuoteModelSelector } from "./QuoteModel.base"
import { QuoteLinePaginationModel, QuoteLinePaginationModelType } from "./QuoteLinePaginationModel"
import { quoteLinePaginationModelPrimitives, QuoteLinePaginationModelSelector } from "./QuoteLinePaginationModel.base"
import { QuoteLineModel, QuoteLineModelType } from "./QuoteLineModel"
import { quoteLineModelPrimitives, QuoteLineModelSelector } from "./QuoteLineModel.base"
import { OpportunityPaginationModel, OpportunityPaginationModelType } from "./OpportunityPaginationModel"
import { opportunityPaginationModelPrimitives, OpportunityPaginationModelSelector } from "./OpportunityPaginationModel.base"
import { OpportunityModel, OpportunityModelType } from "./OpportunityModel"
import { opportunityModelPrimitives, OpportunityModelSelector } from "./OpportunityModel.base"
import { AccountPaginationModel, AccountPaginationModelType } from "./AccountPaginationModel"
import { accountPaginationModelPrimitives, AccountPaginationModelSelector } from "./AccountPaginationModel.base"
import { AccountModel, AccountModelType } from "./AccountModel"
import { accountModelPrimitives, AccountModelSelector } from "./AccountModel.base"
import { ContactPaginationModel, ContactPaginationModelType } from "./ContactPaginationModel"
import { contactPaginationModelPrimitives, ContactPaginationModelSelector } from "./ContactPaginationModel.base"
import { ContactModel, ContactModelType } from "./ContactModel"
import { contactModelPrimitives, ContactModelSelector } from "./ContactModel.base"
import { OrderPaginationModel, OrderPaginationModelType } from "./OrderPaginationModel"
import { orderPaginationModelPrimitives, OrderPaginationModelSelector } from "./OrderPaginationModel.base"
import { OrderModel, OrderModelType } from "./OrderModel"
import { orderModelPrimitives, OrderModelSelector } from "./OrderModel.base"
import { OrderLinePaginationModel, OrderLinePaginationModelType } from "./OrderLinePaginationModel"
import { orderLinePaginationModelPrimitives, OrderLinePaginationModelSelector } from "./OrderLinePaginationModel.base"
import { OrderLineModel, OrderLineModelType } from "./OrderLineModel"
import { orderLineModelPrimitives, OrderLineModelSelector } from "./OrderLineModel.base"
import { CertificationPaginationModel, CertificationPaginationModelType } from "./CertificationPaginationModel"
import { certificationPaginationModelPrimitives, CertificationPaginationModelSelector } from "./CertificationPaginationModel.base"
import { CertificationModel, CertificationModelType } from "./CertificationModel"
import { certificationModelPrimitives, CertificationModelSelector } from "./CertificationModel.base"
import { AdvisoryPaginationModel, AdvisoryPaginationModelType } from "./AdvisoryPaginationModel"
import { advisoryPaginationModelPrimitives, AdvisoryPaginationModelSelector } from "./AdvisoryPaginationModel.base"
import { AdvisoryModel, AdvisoryModelType } from "./AdvisoryModel"
import { advisoryModelPrimitives, AdvisoryModelSelector } from "./AdvisoryModel.base"
import { QGradePaginationModel, QGradePaginationModelType } from "./QGradePaginationModel"
import { qGradePaginationModelPrimitives, QGradePaginationModelSelector } from "./QGradePaginationModel.base"
import { QGradeModel, QGradeModelType } from "./QGradeModel"
import { qGradeModelPrimitives, QGradeModelSelector } from "./QGradeModel.base"
import { CartPaginationModel, CartPaginationModelType } from "./CartPaginationModel"
import { cartPaginationModelPrimitives, CartPaginationModelSelector } from "./CartPaginationModel.base"
import { CartModel, CartModelType } from "./CartModel"
import { cartModelPrimitives, CartModelSelector } from "./CartModel.base"
import { ProductAttributePaginationModel, ProductAttributePaginationModelType } from "./ProductAttributePaginationModel"
import { productAttributePaginationModelPrimitives, ProductAttributePaginationModelSelector } from "./ProductAttributePaginationModel.base"
import { ProductAttributeModel, ProductAttributeModelType } from "./ProductAttributeModel"
import { productAttributeModelPrimitives, ProductAttributeModelSelector } from "./ProductAttributeModel.base"
import { OpportunityLinePaginationModel, OpportunityLinePaginationModelType } from "./OpportunityLinePaginationModel"
import { opportunityLinePaginationModelPrimitives, OpportunityLinePaginationModelSelector } from "./OpportunityLinePaginationModel.base"
import { OpportunityLineModel, OpportunityLineModelType } from "./OpportunityLineModel"
import { opportunityLineModelPrimitives, OpportunityLineModelSelector } from "./OpportunityLineModel.base"
import { RecordPaginationModel, RecordPaginationModelType } from "./RecordPaginationModel"
import { recordPaginationModelPrimitives, RecordPaginationModelSelector } from "./RecordPaginationModel.base"
import { RecordModel, RecordModelType } from "./RecordModel"
import { recordModelPrimitives, RecordModelSelector } from "./RecordModel.base"
import { ProductRequestPaginationModel, ProductRequestPaginationModelType } from "./ProductRequestPaginationModel"
import { productRequestPaginationModelPrimitives, ProductRequestPaginationModelSelector } from "./ProductRequestPaginationModel.base"
import { ProductRequestModel, ProductRequestModelType } from "./ProductRequestModel"
import { productRequestModelPrimitives, ProductRequestModelSelector } from "./ProductRequestModel.base"
import { LayoutPaginationModel, LayoutPaginationModelType } from "./LayoutPaginationModel"
import { layoutPaginationModelPrimitives, LayoutPaginationModelSelector } from "./LayoutPaginationModel.base"
import { LayoutModel, LayoutModelType } from "./LayoutModel"
import { layoutModelPrimitives, LayoutModelSelector } from "./LayoutModel.base"
import { ComponentPaginationModel, ComponentPaginationModelType } from "./ComponentPaginationModel"
import { componentPaginationModelPrimitives, ComponentPaginationModelSelector } from "./ComponentPaginationModel.base"
import { ComponentModel, ComponentModelType } from "./ComponentModel"
import { componentModelPrimitives, ComponentModelSelector } from "./ComponentModel.base"
import { InsurancePaginationModel, InsurancePaginationModelType } from "./InsurancePaginationModel"
import { insurancePaginationModelPrimitives, InsurancePaginationModelSelector } from "./InsurancePaginationModel.base"
import { InsuranceModel, InsuranceModelType } from "./InsuranceModel"
import { insuranceModelPrimitives, InsuranceModelSelector } from "./InsuranceModel.base"
import { PaymentPaginationModel, PaymentPaginationModelType } from "./PaymentPaginationModel"
import { paymentPaginationModelPrimitives, PaymentPaginationModelSelector } from "./PaymentPaginationModel.base"
import { PaymentModel, PaymentModelType } from "./PaymentModel"
import { paymentModelPrimitives, PaymentModelSelector } from "./PaymentModel.base"


import { Sort } from "./SortEnum"
import { UserRoleEnumType } from "./UserRoleEnumTypeEnum"
import { UserStatusEnumType } from "./UserStatusEnumTypeEnum"
import { FinanceFinanceagencyEnumType } from "./FinanceFinanceagencyEnumTypeEnum"
import { FinanceStatusEnumType } from "./FinanceStatusEnumTypeEnum"
import { VerifyStatusEnumType } from "./VerifyStatusEnumTypeEnum"
import { FileStatusEnumType } from "./FileStatusEnumTypeEnum"
import { LeadRequesttypeEnumType } from "./LeadRequesttypeEnumTypeEnum"
import { LeadStatusEnumType } from "./LeadStatusEnumTypeEnum"
import { LeadLineStatusEnumType } from "./LeadLineStatusEnumTypeEnum"
import { QuoteStatusEnumType } from "./QuoteStatusEnumTypeEnum"
import { QuoteLineStatusEnumType } from "./QuoteLineStatusEnumTypeEnum"
import { OrderOrdertypeEnumType } from "./OrderOrdertypeEnumTypeEnum"
import { OrderStatusEnumType } from "./OrderStatusEnumTypeEnum"
import { OrderLineStatusEnumType } from "./OrderLineStatusEnumTypeEnum"
import { CertificationCropnameEnumType } from "./CertificationCropnameEnumTypeEnum"
import { CertificationCertificatenameEnumType } from "./CertificationCertificatenameEnumTypeEnum"
import { CertificationCertificateagencyEnumType } from "./CertificationCertificateagencyEnumTypeEnum"
import { CertificationStatusEnumType } from "./CertificationStatusEnumTypeEnum"
import { AdvisoryStatusEnumType } from "./AdvisoryStatusEnumTypeEnum"
import { QGradeVarietyEnumType } from "./QGradeVarietyEnumTypeEnum"
import { QGradeOriginEnumType } from "./QGradeOriginEnumTypeEnum"
import { QGradeProcesstypeEnumType } from "./QGradeProcesstypeEnumTypeEnum"
import { QGradeStatusEnumType } from "./QGradeStatusEnumTypeEnum"
import { CartVarietyEnumType } from "./CartVarietyEnumTypeEnum"
import { CartOriginEnumType } from "./CartOriginEnumTypeEnum"
import { CartProcesstypeEnumType } from "./CartProcesstypeEnumTypeEnum"
import { CartGradeEnumType } from "./CartGradeEnumTypeEnum"
import { RecordDocumenttypeEnumType } from "./RecordDocumenttypeEnumTypeEnum"
import { RecordStatusEnumType } from "./RecordStatusEnumTypeEnum"
import { ComponentComponenttypeEnumType } from "./ComponentComponenttypeEnumTypeEnum"

export type FilterParams = {
  productNames?: (string | null)[]
  cuppingScore?: (Range | null)
  price?: (Range | null)
  certificateTypes?: (string | null)[]
  varieties?: (string | null)[]
}
export type Range = {
  min?: (number | null)
  max?: (number | null)
}
export type SignUpData = {
  name?: (string | null)
  email?: (string | null)
  password?: (string | null)
  mobile?: (string | null)
  role?: (string | null)
  requestedProfile?: (string | null)[]
}
export type WhereId = {
  is?: (string | null)
  isNot?: (string | null)
  in?: string[]
  notIn?: string[]
}
export type WhereString = {
  is?: (string | null)
  isNot?: (string | null)
  contains?: (string | null)
  notContains?: (string | null)
  startsWith?: (string | null)
  notStartWith?: (string | null)
  endsWith?: (string | null)
  notEndsWith?: (string | null)
  isIn?: (string | null)[]
  notIn?: (string | null)[]
}
export type WhereInt = {
  is?: (number | null)
  isNot?: (number | null)
  lt?: (number | null)
  lte?: (number | null)
  gt?: (number | null)
  gte?: (number | null)
  in?: (number | null)[]
  notIn?: (number | null)[]
}
export type WhereDateTime = {
  is?: (string | null)
  isNot?: (string | null)
  lt?: (string | null)
  lte?: (string | null)
  gt?: (string | null)
  gte?: (string | null)
  in?: (string | null)[]
  notIn?: (string | null)[]
}
export type SortUserInput = {
  name?: (Sort | null)
  email?: (Sort | null)
  mobile?: (Sort | null)
  role?: (Sort | null)
  isVerified?: (Sort | null)
  status?: (Sort | null)
  requestedProfile?: (Sort | null)
}
export type WhereUserInput = {
  id?: (WhereId | null)
  name?: (WhereString | null)
  email?: (WhereString | null)
  mobile?: (WhereString | null)
  role?: (UserRoleEnumType | null)
  isVerified?: (boolean | null)
  status?: (UserStatusEnumType | null)
  profile?: (WhereId | null)
  requestedProfile?: (WhereString | null)
  AND?: (WhereUserInput | null)[]
  OR?: (WhereUserInput | null)[]
}
export type CreateUserInput = {
  name?: (string | null)
  email?: (string | null)
  password?: (string | null)
  mobile?: (string | null)
  role?: (UserRoleEnumType | null)
  isVerified?: (boolean | null)
  status?: (UserStatusEnumType | null)
  profile?: (string | null)
  requestedProfile?: (string | null)[]
}
export type UpdateUserSchema = {
  name?: (string | null)
  email?: (string | null)
  password?: (string | null)
  mobile?: (string | null)
  role?: (UserRoleEnumType | null)
  isVerified?: (boolean | null)
  status?: (UserStatusEnumType | null)
  profile?: (string | null)
  requestedProfile?: (string | null)[]
}
export type UpdateUserInput = {
  id: string
  data: UpdateUserSchema
}
export type SortFinanceInput = {
  requestId?: (Sort | null)
  name?: (Sort | null)
  mobile?: (Sort | null)
  email?: (Sort | null)
  DOI?: (Sort | null)
  purposeOfLoan?: (Sort | null)
  loanAmount?: (Sort | null)
  annualIncome?: (Sort | null)
  panCardNumber?: (Sort | null)
  financeAgency?: (Sort | null)
  status?: (Sort | null)
}
export type WhereFinanceInput = {
  id?: (WhereId | null)
  user?: (WhereId | null)
  serviceProvider?: (WhereId | null)
  requestId?: (WhereString | null)
  name?: (WhereString | null)
  mobile?: (WhereString | null)
  email?: (WhereString | null)
  DOI?: (WhereString | null)
  purposeOfLoan?: (WhereString | null)
  loanAmount?: (WhereInt | null)
  annualIncome?: (WhereInt | null)
  panCardNumber?: (WhereString | null)
  panCardImg?: (WhereId | null)
  incorporateCertificateImg?: (WhereId | null)
  cancelledChequeImg?: (WhereId | null)
  threeYearsItr?: (WhereId | null)
  financeAgency?: (FinanceFinanceagencyEnumType | null)
  status?: (FinanceStatusEnumType | null)
  AND?: (WhereFinanceInput | null)[]
  OR?: (WhereFinanceInput | null)[]
}
export type CreateFinanceInput = {
  user?: (string | null)
  serviceProvider?: (string | null)
  requestId?: (string | null)
  name?: (string | null)
  mobile?: (string | null)
  email?: (string | null)
  DOI?: (string | null)
  purposeOfLoan?: (string | null)
  loanAmount?: (number | null)
  annualIncome?: (number | null)
  panCardNumber?: (string | null)
  panCardImg?: (string | null)
  incorporateCertificateImg?: (string | null)
  cancelledChequeImg?: (string | null)
  threeYearsItr?: (string | null)
  financeAgency?: (FinanceFinanceagencyEnumType | null)
  status?: (FinanceStatusEnumType | null)
}
export type UpdateFinanceSchema = {
  user?: (string | null)
  serviceProvider?: (string | null)
  requestId?: (string | null)
  name?: (string | null)
  mobile?: (string | null)
  email?: (string | null)
  DOI?: (string | null)
  purposeOfLoan?: (string | null)
  loanAmount?: (number | null)
  annualIncome?: (number | null)
  panCardNumber?: (string | null)
  panCardImg?: (string | null)
  incorporateCertificateImg?: (string | null)
  cancelledChequeImg?: (string | null)
  threeYearsItr?: (string | null)
  financeAgency?: (FinanceFinanceagencyEnumType | null)
  status?: (FinanceStatusEnumType | null)
}
export type UpdateFinanceInput = {
  id: string
  data: UpdateFinanceSchema
}
export type SortProfileInput = {
  name?: (Sort | null)
  slug?: (Sort | null)
}
export type WhereProfileInput = {
  id?: (WhereId | null)
  name?: (WhereString | null)
  slug?: (WhereString | null)
  AND?: (WhereProfileInput | null)[]
  OR?: (WhereProfileInput | null)[]
}
export type CreateProfileInput = {
  name?: (string | null)
  slug?: (string | null)
}
export type UpdateProfileSchema = {
  name?: (string | null)
  slug?: (string | null)
}
export type UpdateProfileInput = {
  id: string
  data: UpdateProfileSchema
}
export type SortUnitInput = {
  name?: (Sort | null)
  slug?: (Sort | null)
}
export type WhereUnitInput = {
  id?: (WhereId | null)
  name?: (WhereString | null)
  slug?: (WhereString | null)
  AND?: (WhereUnitInput | null)[]
  OR?: (WhereUnitInput | null)[]
}
export type CreateUnitInput = {
  name?: (string | null)
  slug?: (string | null)
}
export type UpdateUnitSchema = {
  name?: (string | null)
  slug?: (string | null)
}
export type UpdateUnitInput = {
  id: string
  data: UpdateUnitSchema
}
export type SortCategoryInput = {
  name?: (Sort | null)
  slug?: (Sort | null)
}
export type WhereCategoryInput = {
  id?: (WhereId | null)
  name?: (WhereString | null)
  slug?: (WhereString | null)
  AND?: (WhereCategoryInput | null)[]
  OR?: (WhereCategoryInput | null)[]
}
export type CreateCategoryInput = {
  name?: (string | null)
  slug?: (string | null)
}
export type UpdateCategorySchema = {
  name?: (string | null)
  slug?: (string | null)
}
export type UpdateCategoryInput = {
  id: string
  data: UpdateCategorySchema
}
export type SortProductInput = {
  name?: (Sort | null)
  minPrice?: (Sort | null)
  maxPrice?: (Sort | null)
  quantity?: (Sort | null)
  allocatedQuantity?: (Sort | null)
  soldQuantity?: (Sort | null)
  updatedOn?: (Sort | null)
  createdOn?: (Sort | null)
}
export type WhereProductInput = {
  id?: (WhereId | null)
  name?: (WhereString | null)
  seller?: (WhereId | null)
  minPrice?: (WhereInt | null)
  maxPrice?: (WhereInt | null)
  quantity?: (WhereInt | null)
  allocatedQuantity?: (WhereInt | null)
  soldQuantity?: (WhereInt | null)
  category?: (WhereId | null)
  allowedUnits?: (WhereId | null)
  image?: (WhereId | null)
  AND?: (WhereProductInput | null)[]
  OR?: (WhereProductInput | null)[]
}
export type CreateProductInput = {
  name?: (string | null)
  seller?: (string | null)
  minPrice?: (number | null)
  maxPrice?: (number | null)
  quantity?: (number | null)
  allocatedQuantity?: (number | null)
  soldQuantity?: (number | null)
  productAttributes?: (string | null)[]
  category?: (string | null)
  allowedUnits?: (string | null)[]
  image?: (string | null)
}
export type UpdateProductSchema = {
  name?: (string | null)
  seller?: (string | null)
  minPrice?: (number | null)
  maxPrice?: (number | null)
  quantity?: (number | null)
  allocatedQuantity?: (number | null)
  soldQuantity?: (number | null)
  productAttributes?: (string | null)[]
  category?: (string | null)
  allowedUnits?: (string | null)[]
  image?: (string | null)
}
export type UpdateProductInput = {
  id: string
  data: UpdateProductSchema
}
export type SortVerifyInput = {
  documentType?: (Sort | null)
  status?: (Sort | null)
}
export type WhereVerifyInput = {
  id?: (WhereId | null)
  user?: (WhereId | null)
  documentType?: (WhereString | null)
  file?: (WhereId | null)
  status?: (VerifyStatusEnumType | null)
  AND?: (WhereVerifyInput | null)[]
  OR?: (WhereVerifyInput | null)[]
}
export type CreateVerifyInput = {
  user?: (string | null)
  documentType?: (string | null)
  file?: (string | null)
  status?: (VerifyStatusEnumType | null)
}
export type UpdateVerifySchema = {
  user?: (string | null)
  documentType?: (string | null)
  file?: (string | null)
  status?: (VerifyStatusEnumType | null)
}
export type UpdateVerifyInput = {
  id: string
  data: UpdateVerifySchema
}
export type SortFileInput = {
  recordType?: (Sort | null)
  status?: (Sort | null)
  originalName?: (Sort | null)
  mimeType?: (Sort | null)
  extension?: (Sort | null)
  size?: (Sort | null)
  location?: (Sort | null)
}
export type WhereFileInput = {
  id?: (WhereId | null)
  recordId?: (WhereId | null)
  recordType?: (WhereString | null)
  status?: (FileStatusEnumType | null)
  originalName?: (WhereString | null)
  mimeType?: (WhereString | null)
  extension?: (WhereString | null)
  size?: (WhereInt | null)
  location?: (WhereString | null)
  AND?: (WhereFileInput | null)[]
  OR?: (WhereFileInput | null)[]
}
export type CreateFileInput = {
  recordId?: (string | null)
  recordType?: (string | null)
  status?: (FileStatusEnumType | null)
  originalName?: (string | null)
  mimeType?: (string | null)
  extension?: (string | null)
  size?: (number | null)
  location?: (string | null)
}
export type UpdateFileSchema = {
  recordId?: (string | null)
  recordType?: (string | null)
  status?: (FileStatusEnumType | null)
  originalName?: (string | null)
  mimeType?: (string | null)
  extension?: (string | null)
  size?: (number | null)
  location?: (string | null)
}
export type UpdateFileInput = {
  id: string
  data: UpdateFileSchema
}
export type SortLeadInput = {
  requestId?: (Sort | null)
  requestType?: (Sort | null)
  status?: (Sort | null)
  updatedOn?: (Sort | null)
  createdOn?: (Sort | null)
}
export type WhereLeadInput = {
  id?: (WhereId | null)
  requestId?: (WhereString | null)
  owner?: (WhereId | null)
  buyer?: (WhereId | null)
  requestType?: (LeadRequesttypeEnumType | null)
  status?: (LeadStatusEnumType | null)
  AND?: (WhereLeadInput | null)[]
  OR?: (WhereLeadInput | null)[]
}
export type CreateLeadInput = {
  requestId?: (string | null)
  owner?: (string | null)
  buyer?: (string | null)
  requestType?: (LeadRequesttypeEnumType | null)
  status?: (LeadStatusEnumType | null)
  leadLines?: (string | null)[]
}
export type UpdateLeadSchema = {
  requestId?: (string | null)
  owner?: (string | null)
  buyer?: (string | null)
  requestType?: (LeadRequesttypeEnumType | null)
  status?: (LeadStatusEnumType | null)
  leadLines?: (string | null)[]
}
export type UpdateLeadInput = {
  id: string
  data: UpdateLeadSchema
}
export type SortLeadLineInput = {
  requestType?: (Sort | null)
  quantity?: (Sort | null)
  isQuotation?: (Sort | null)
  status?: (Sort | null)
  updatedOn?: (Sort | null)
  createdOn?: (Sort | null)
}
export type WhereLeadLineInput = {
  id?: (WhereId | null)
  lead?: (WhereId | null)
  product?: (WhereId | null)
  productRequest?: (WhereId | null)
  requestType?: (WhereString | null)
  unit?: (WhereId | null)
  quantity?: (WhereInt | null)
  isQuotation?: (boolean | null)
  status?: (LeadLineStatusEnumType | null)
  AND?: (WhereLeadLineInput | null)[]
  OR?: (WhereLeadLineInput | null)[]
}
export type CreateLeadLineInput = {
  lead?: (string | null)
  product?: (string | null)
  productRequest?: (string | null)
  requestType?: (string | null)
  unit?: (string | null)
  quantity?: (number | null)
  isQuotation?: (boolean | null)
  status?: (LeadLineStatusEnumType | null)
}
export type UpdateLeadLineSchema = {
  lead?: (string | null)
  product?: (string | null)
  productRequest?: (string | null)
  requestType?: (string | null)
  unit?: (string | null)
  quantity?: (number | null)
  isQuotation?: (boolean | null)
  status?: (LeadLineStatusEnumType | null)
}
export type UpdateLeadLineInput = {
  id: string
  data: UpdateLeadLineSchema
}
export type SortQuoteInput = {
  status?: (Sort | null)
}
export type WhereQuoteInput = {
  id?: (WhereId | null)
  buyer?: (WhereId | null)
  opportunity?: (WhereId | null)
  status?: (QuoteStatusEnumType | null)
  AND?: (WhereQuoteInput | null)[]
  OR?: (WhereQuoteInput | null)[]
}
export type CreateQuoteInput = {
  buyer?: (string | null)
  opportunity?: (string | null)
  status?: (QuoteStatusEnumType | null)
  quoteLines?: (string | null)[]
}
export type UpdateQuoteSchema = {
  buyer?: (string | null)
  opportunity?: (string | null)
  status?: (QuoteStatusEnumType | null)
  quoteLines?: (string | null)[]
}
export type UpdateQuoteInput = {
  id: string
  data: UpdateQuoteSchema
}
export type SortQuoteLineInput = {
  quantity?: (Sort | null)
  price?: (Sort | null)
  estimatedDateOfDelivery?: (Sort | null)
  status?: (Sort | null)
}
export type WhereQuoteLineInput = {
  id?: (WhereId | null)
  product?: (WhereId | null)
  quote?: (WhereId | null)
  leadLine?: (WhereId | null)
  quantity?: (WhereInt | null)
  price?: (WhereInt | null)
  estimatedDateOfDelivery?: (WhereString | null)
  status?: (QuoteLineStatusEnumType | null)
  AND?: (WhereQuoteLineInput | null)[]
  OR?: (WhereQuoteLineInput | null)[]
}
export type CreateQuoteLineInput = {
  product?: (string | null)
  quote?: (string | null)
  leadLine?: (string | null)
  quantity?: (number | null)
  price?: (number | null)
  estimatedDateOfDelivery?: (string | null)
  status?: (QuoteLineStatusEnumType | null)
}
export type UpdateQuoteLineSchema = {
  product?: (string | null)
  quote?: (string | null)
  leadLine?: (string | null)
  quantity?: (number | null)
  price?: (number | null)
  estimatedDateOfDelivery?: (string | null)
  status?: (QuoteLineStatusEnumType | null)
}
export type UpdateQuoteLineInput = {
  id: string
  data: UpdateQuoteLineSchema
}
export type SortOpportunityInput = {
  requestId?: (Sort | null)
  status?: (Sort | null)
  updatedOn?: (Sort | null)
  createdOn?: (Sort | null)
}
export type WhereOpportunityInput = {
  id?: (WhereId | null)
  buyer?: (WhereId | null)
  requestId?: (WhereString | null)
  lead?: (WhereId | null)
  quotes?: (WhereId | null)
  account?: (WhereId | null)
  contact?: (WhereId | null)
  owner?: (WhereId | null)
  createdBy?: (WhereId | null)
  approvedBy?: (WhereId | null)
  status?: (WhereString | null)
  AND?: (WhereOpportunityInput | null)[]
  OR?: (WhereOpportunityInput | null)[]
}
export type CreateOpportunityInput = {
  buyer?: (string | null)
  requestId?: (string | null)
  lead?: (string | null)
  quotes?: (string | null)[]
  account?: (string | null)
  contact?: (string | null)
  owner?: (string | null)
  createdBy?: (string | null)
  approvedBy?: (string | null)
  opportunityLines?: (string | null)[]
  status?: (string | null)
}
export type UpdateOpportunitySchema = {
  buyer?: (string | null)
  requestId?: (string | null)
  lead?: (string | null)
  quotes?: (string | null)[]
  account?: (string | null)
  contact?: (string | null)
  owner?: (string | null)
  createdBy?: (string | null)
  approvedBy?: (string | null)
  opportunityLines?: (string | null)[]
  status?: (string | null)
}
export type UpdateOpportunityInput = {
  id: string
  data: UpdateOpportunitySchema
}
export type SortAccountInput = {
  companyName?: (Sort | null)
}
export type WhereAccountInput = {
  id?: (WhereId | null)
  companyName?: (WhereString | null)
  AND?: (WhereAccountInput | null)[]
  OR?: (WhereAccountInput | null)[]
}
export type CreateAccountInput = {
  companyName?: (string | null)
}
export type UpdateAccountSchema = {
  companyName?: (string | null)
}
export type UpdateAccountInput = {
  id: string
  data: UpdateAccountSchema
}
export type SortContactInput = {
  shippingAddress?: (Sort | null)
  billingAddress?: (Sort | null)
  country?: (Sort | null)
  zipCode?: (Sort | null)
  mobile?: (Sort | null)
}
export type WhereContactInput = {
  id?: (WhereId | null)
  shippingAddress?: (WhereString | null)
  billingAddress?: (WhereString | null)
  country?: (WhereString | null)
  zipCode?: (WhereInt | null)
  mobile?: (WhereString | null)
  AND?: (WhereContactInput | null)[]
  OR?: (WhereContactInput | null)[]
}
export type CreateContactInput = {
  shippingAddress?: (string | null)
  billingAddress?: (string | null)
  country?: (string | null)
  zipCode?: (number | null)
  mobile?: (string | null)
}
export type UpdateContactSchema = {
  shippingAddress?: (string | null)
  billingAddress?: (string | null)
  country?: (string | null)
  zipCode?: (number | null)
  mobile?: (string | null)
}
export type UpdateContactInput = {
  id: string
  data: UpdateContactSchema
}
export type SortOrderInput = {
  requestId?: (Sort | null)
  totalAmount?: (Sort | null)
  orderType?: (Sort | null)
  status?: (Sort | null)
  updatedOn?: (Sort | null)
  createdOn?: (Sort | null)
}
export type WhereOrderInput = {
  id?: (WhereId | null)
  requestId?: (WhereString | null)
  account?: (WhereId | null)
  contact?: (WhereId | null)
  opportunity?: (WhereId | null)
  user?: (WhereId | null)
  totalAmount?: (WhereInt | null)
  orderType?: (OrderOrdertypeEnumType | null)
  status?: (OrderStatusEnumType | null)
  AND?: (WhereOrderInput | null)[]
  OR?: (WhereOrderInput | null)[]
}
export type CreateOrderInput = {
  requestId?: (string | null)
  account?: (string | null)
  contact?: (string | null)
  opportunity?: (string | null)
  user?: (string | null)
  totalAmount?: (number | null)
  orderType?: (OrderOrdertypeEnumType | null)
  orderLines?: (string | null)[]
  status?: (OrderStatusEnumType | null)
}
export type UpdateOrderSchema = {
  requestId?: (string | null)
  account?: (string | null)
  contact?: (string | null)
  opportunity?: (string | null)
  user?: (string | null)
  totalAmount?: (number | null)
  orderType?: (OrderOrdertypeEnumType | null)
  orderLines?: (string | null)[]
  status?: (OrderStatusEnumType | null)
}
export type UpdateOrderInput = {
  id: string
  data: UpdateOrderSchema
}
export type SortOrderLineInput = {
  orderedQuantity?: (Sort | null)
  deliveredQuantity?: (Sort | null)
  price?: (Sort | null)
  actualDeliveryDate?: (Sort | null)
  estimatedDateOfDelivery?: (Sort | null)
  status?: (Sort | null)
  updatedOn?: (Sort | null)
  createdOn?: (Sort | null)
}
export type WhereOrderLineInput = {
  id?: (WhereId | null)
  order?: (WhereId | null)
  product?: (WhereId | null)
  orderedQuantity?: (WhereInt | null)
  deliveredQuantity?: (WhereInt | null)
  price?: (WhereInt | null)
  actualDeliveryDate?: (WhereString | null)
  estimatedDateOfDelivery?: (WhereString | null)
  status?: (OrderLineStatusEnumType | null)
  AND?: (WhereOrderLineInput | null)[]
  OR?: (WhereOrderLineInput | null)[]
}
export type CreateOrderLineInput = {
  order?: (string | null)
  product?: (string | null)
  orderedQuantity?: (number | null)
  deliveredQuantity?: (number | null)
  price?: (number | null)
  actualDeliveryDate?: (string | null)
  estimatedDateOfDelivery?: (string | null)
  status?: (OrderLineStatusEnumType | null)
}
export type UpdateOrderLineSchema = {
  order?: (string | null)
  product?: (string | null)
  orderedQuantity?: (number | null)
  deliveredQuantity?: (number | null)
  price?: (number | null)
  actualDeliveryDate?: (string | null)
  estimatedDateOfDelivery?: (string | null)
  status?: (OrderLineStatusEnumType | null)
}
export type UpdateOrderLineInput = {
  id: string
  data: UpdateOrderLineSchema
}
export type SortCertificationInput = {
  cropName?: (Sort | null)
  requestId?: (Sort | null)
  productName?: (Sort | null)
  name?: (Sort | null)
  mobile?: (Sort | null)
  email?: (Sort | null)
  address?: (Sort | null)
  certificateName?: (Sort | null)
  certificateAgency?: (Sort | null)
  status?: (Sort | null)
}
export type WhereCertificationInput = {
  id?: (WhereId | null)
  serviceProvider?: (WhereId | null)
  cropName?: (CertificationCropnameEnumType | null)
  requestId?: (WhereString | null)
  user?: (WhereId | null)
  productName?: (WhereString | null)
  name?: (WhereString | null)
  mobile?: (WhereString | null)
  email?: (WhereString | null)
  address?: (WhereString | null)
  certificateName?: (CertificationCertificatenameEnumType | null)
  certificateAgency?: (CertificationCertificateagencyEnumType | null)
  certificationDoc?: (WhereId | null)
  status?: (CertificationStatusEnumType | null)
  AND?: (WhereCertificationInput | null)[]
  OR?: (WhereCertificationInput | null)[]
}
export type CreateCertificationInput = {
  serviceProvider?: (string | null)
  cropName?: (CertificationCropnameEnumType | null)
  requestId?: (string | null)
  user?: (string | null)
  productName?: (string | null)
  name?: (string | null)
  mobile?: (string | null)
  email?: (string | null)
  address?: (string | null)
  certificateName?: (CertificationCertificatenameEnumType | null)
  certificateAgency?: (CertificationCertificateagencyEnumType | null)
  certificationDoc?: (string | null)
  status?: (CertificationStatusEnumType | null)
}
export type UpdateCertificationSchema = {
  serviceProvider?: (string | null)
  cropName?: (CertificationCropnameEnumType | null)
  requestId?: (string | null)
  user?: (string | null)
  productName?: (string | null)
  name?: (string | null)
  mobile?: (string | null)
  email?: (string | null)
  address?: (string | null)
  certificateName?: (CertificationCertificatenameEnumType | null)
  certificateAgency?: (CertificationCertificateagencyEnumType | null)
  certificationDoc?: (string | null)
  status?: (CertificationStatusEnumType | null)
}
export type UpdateCertificationInput = {
  id: string
  data: UpdateCertificationSchema
}
export type SortAdvisoryInput = {
  requestId?: (Sort | null)
  productName?: (Sort | null)
  name?: (Sort | null)
  advisoryQuestion?: (Sort | null)
  customQuestion?: (Sort | null)
  advice?: (Sort | null)
  address?: (Sort | null)
  status?: (Sort | null)
}
export type WhereAdvisoryInput = {
  id?: (WhereId | null)
  user?: (WhereId | null)
  serviceProvider?: (WhereId | null)
  requestId?: (WhereString | null)
  productName?: (WhereString | null)
  name?: (WhereString | null)
  advisoryQuestion?: (WhereString | null)
  customQuestion?: (WhereString | null)
  advice?: (WhereString | null)
  address?: (WhereString | null)
  status?: (AdvisoryStatusEnumType | null)
  AND?: (WhereAdvisoryInput | null)[]
  OR?: (WhereAdvisoryInput | null)[]
}
export type CreateAdvisoryInput = {
  user?: (string | null)
  serviceProvider?: (string | null)
  requestId?: (string | null)
  productName?: (string | null)
  name?: (string | null)
  advisoryQuestion?: (string | null)
  customQuestion?: (string | null)
  advice?: (string | null)
  address?: (string | null)
  status?: (AdvisoryStatusEnumType | null)
}
export type UpdateAdvisorySchema = {
  user?: (string | null)
  serviceProvider?: (string | null)
  requestId?: (string | null)
  productName?: (string | null)
  name?: (string | null)
  advisoryQuestion?: (string | null)
  customQuestion?: (string | null)
  advice?: (string | null)
  address?: (string | null)
  status?: (AdvisoryStatusEnumType | null)
}
export type UpdateAdvisoryInput = {
  id: string
  data: UpdateAdvisorySchema
}
export type SortQGradeInput = {
  requestId?: (Sort | null)
  companyName?: (Sort | null)
  productName?: (Sort | null)
  name?: (Sort | null)
  mobile?: (Sort | null)
  email?: (Sort | null)
  address?: (Sort | null)
  variety?: (Sort | null)
  origin?: (Sort | null)
  processType?: (Sort | null)
  harvestPeriod?: (Sort | null)
  status?: (Sort | null)
}
export type WhereQGradeInput = {
  id?: (WhereId | null)
  user?: (WhereId | null)
  serviceProvider?: (WhereId | null)
  requestId?: (WhereString | null)
  companyName?: (WhereString | null)
  productName?: (WhereString | null)
  name?: (WhereString | null)
  mobile?: (WhereString | null)
  email?: (WhereString | null)
  address?: (WhereString | null)
  variety?: (QGradeVarietyEnumType | null)
  origin?: (QGradeOriginEnumType | null)
  processType?: (QGradeProcesstypeEnumType | null)
  harvestPeriod?: (WhereString | null)
  status?: (QGradeStatusEnumType | null)
  AND?: (WhereQGradeInput | null)[]
  OR?: (WhereQGradeInput | null)[]
}
export type CreateQGradeInput = {
  user?: (string | null)
  serviceProvider?: (string | null)
  requestId?: (string | null)
  companyName?: (string | null)
  productName?: (string | null)
  name?: (string | null)
  mobile?: (string | null)
  email?: (string | null)
  address?: (string | null)
  variety?: (QGradeVarietyEnumType | null)
  origin?: (QGradeOriginEnumType | null)
  processType?: (QGradeProcesstypeEnumType | null)
  harvestPeriod?: (string | null)
  status?: (QGradeStatusEnumType | null)
}
export type UpdateQGradeSchema = {
  user?: (string | null)
  serviceProvider?: (string | null)
  requestId?: (string | null)
  companyName?: (string | null)
  productName?: (string | null)
  name?: (string | null)
  mobile?: (string | null)
  email?: (string | null)
  address?: (string | null)
  variety?: (QGradeVarietyEnumType | null)
  origin?: (QGradeOriginEnumType | null)
  processType?: (QGradeProcesstypeEnumType | null)
  harvestPeriod?: (string | null)
  status?: (QGradeStatusEnumType | null)
}
export type UpdateQGradeInput = {
  id: string
  data: UpdateQGradeSchema
}
export type SortCartInput = {
  quantity?: (Sort | null)
  variety?: (Sort | null)
  origin?: (Sort | null)
  processType?: (Sort | null)
  grade?: (Sort | null)
  cuppingScore?: (Sort | null)
  moisture?: (Sort | null)
  price?: (Sort | null)
  certificationDocument?: (Sort | null)
  productImage?: (Sort | null)
}
export type WhereCartInput = {
  id?: (WhereId | null)
  product?: (WhereId | null)
  buyer?: (WhereId | null)
  seller?: (WhereId | null)
  quantity?: (WhereInt | null)
  variety?: (CartVarietyEnumType | null)
  origin?: (CartOriginEnumType | null)
  processType?: (CartProcesstypeEnumType | null)
  grade?: (CartGradeEnumType | null)
  cuppingScore?: (WhereInt | null)
  moisture?: (WhereString | null)
  price?: (WhereString | null)
  certificationDocument?: (WhereString | null)
  productImage?: (WhereString | null)
  AND?: (WhereCartInput | null)[]
  OR?: (WhereCartInput | null)[]
}
export type CreateCartInput = {
  product?: (string | null)
  buyer?: (string | null)
  seller?: (string | null)
  quantity?: (number | null)
  variety?: (CartVarietyEnumType | null)
  origin?: (CartOriginEnumType | null)
  processType?: (CartProcesstypeEnumType | null)
  grade?: (CartGradeEnumType | null)
  cuppingScore?: (number | null)
  moisture?: (string | null)
  price?: (string | null)
  certificationDocument?: (string | null)
  productImage?: (string | null)
}
export type UpdateCartSchema = {
  product?: (string | null)
  buyer?: (string | null)
  seller?: (string | null)
  quantity?: (number | null)
  variety?: (CartVarietyEnumType | null)
  origin?: (CartOriginEnumType | null)
  processType?: (CartProcesstypeEnumType | null)
  grade?: (CartGradeEnumType | null)
  cuppingScore?: (number | null)
  moisture?: (string | null)
  price?: (string | null)
  certificationDocument?: (string | null)
  productImage?: (string | null)
}
export type UpdateCartInput = {
  id: string
  data: UpdateCartSchema
}
export type SortProductAttributeInput = {
  name?: (Sort | null)
  label?: (Sort | null)
  value?: (Sort | null)
  attributeType?: (Sort | null)
}
export type WhereProductAttributeInput = {
  id?: (WhereId | null)
  name?: (WhereString | null)
  label?: (WhereString | null)
  product?: (WhereId | null)
  productRequest?: (WhereId | null)
  value?: (WhereString | null)
  attributeType?: (WhereString | null)
  AND?: (WhereProductAttributeInput | null)[]
  OR?: (WhereProductAttributeInput | null)[]
}
export type CreateProductAttributeInput = {
  name?: (string | null)
  label?: (string | null)
  product?: (string | null)
  productRequest?: (string | null)
  value?: (string | null)
  attributeType?: (string | null)
}
export type UpdateProductAttributeSchema = {
  name?: (string | null)
  label?: (string | null)
  product?: (string | null)
  productRequest?: (string | null)
  value?: (string | null)
  attributeType?: (string | null)
}
export type UpdateProductAttributeInput = {
  id: string
  data: UpdateProductAttributeSchema
}
export type SortOpportunityLineInput = {
  quantity?: (Sort | null)
  price?: (Sort | null)
  updatedOn?: (Sort | null)
  createdOn?: (Sort | null)
}
export type WhereOpportunityLineInput = {
  id?: (WhereId | null)
  seller?: (WhereId | null)
  opportunity?: (WhereId | null)
  product?: (WhereId | null)
  unit?: (WhereId | null)
  quantity?: (WhereInt | null)
  price?: (WhereInt | null)
  createdBy?: (WhereId | null)
  approvedBy?: (WhereId | null)
  AND?: (WhereOpportunityLineInput | null)[]
  OR?: (WhereOpportunityLineInput | null)[]
}
export type CreateOpportunityLineInput = {
  seller?: (string | null)
  opportunity?: (string | null)
  product?: (string | null)
  unit?: (string | null)
  quantity?: (number | null)
  price?: (number | null)
  createdBy?: (string | null)
  approvedBy?: (string | null)
}
export type UpdateOpportunityLineSchema = {
  seller?: (string | null)
  opportunity?: (string | null)
  product?: (string | null)
  unit?: (string | null)
  quantity?: (number | null)
  price?: (number | null)
  createdBy?: (string | null)
  approvedBy?: (string | null)
}
export type UpdateOpportunityLineInput = {
  id: string
  data: UpdateOpportunityLineSchema
}
export type SortRecordInput = {
  documentType?: (Sort | null)
  requestType?: (Sort | null)
  status?: (Sort | null)
}
export type WhereRecordInput = {
  id?: (WhereId | null)
  documentType?: (RecordDocumenttypeEnumType | null)
  requestType?: (WhereString | null)
  requestId?: (WhereId | null)
  status?: (RecordStatusEnumType | null)
  AND?: (WhereRecordInput | null)[]
  OR?: (WhereRecordInput | null)[]
}
export type CreateRecordInput = {
  documentType?: (RecordDocumenttypeEnumType | null)
  requestType?: (string | null)
  requestId?: (string | null)
  file?: (string | null)
  status?: (RecordStatusEnumType | null)
}
export type UpdateRecordSchema = {
  documentType?: (RecordDocumenttypeEnumType | null)
  requestType?: (string | null)
  requestId?: (string | null)
  file?: (string | null)
  status?: (RecordStatusEnumType | null)
}
export type UpdateRecordInput = {
  id: string
  data: UpdateRecordSchema
}
export type SortProductRequestInput = {
  name?: (Sort | null)
  price?: (Sort | null)
  quantity?: (Sort | null)
}
export type WhereProductRequestInput = {
  id?: (WhereId | null)
  name?: (WhereString | null)
  buyer?: (WhereId | null)
  price?: (WhereInt | null)
  quantity?: (WhereInt | null)
  AND?: (WhereProductRequestInput | null)[]
  OR?: (WhereProductRequestInput | null)[]
}
export type CreateProductRequestInput = {
  name?: (string | null)
  buyer?: (string | null)
  price?: (number | null)
  quantity?: (number | null)
  productAttributes?: (string | null)[]
}
export type UpdateProductRequestSchema = {
  name?: (string | null)
  buyer?: (string | null)
  price?: (number | null)
  quantity?: (number | null)
  productAttributes?: (string | null)[]
}
export type UpdateProductRequestInput = {
  id: string
  data: UpdateProductRequestSchema
}
export type SortLayoutInput = {
  name?: (Sort | null)
  label?: (Sort | null)
  modelName?: (Sort | null)
  actionType?: (Sort | null)
}
export type WhereLayoutInput = {
  id?: (WhereId | null)
  profile?: (WhereId | null)
  name?: (WhereString | null)
  label?: (WhereString | null)
  modelName?: (WhereString | null)
  actionType?: (WhereString | null)
  components?: (WhereId | null)
  AND?: (WhereLayoutInput | null)[]
  OR?: (WhereLayoutInput | null)[]
}
export type CreateLayoutInput = {
  profile?: (string | null)
  name?: (string | null)
  label?: (string | null)
  modelName?: (string | null)
  actionType?: (string | null)
  components?: (string | null)[]
}
export type UpdateLayoutSchema = {
  profile?: (string | null)
  name?: (string | null)
  label?: (string | null)
  modelName?: (string | null)
  actionType?: (string | null)
  components?: (string | null)[]
}
export type UpdateLayoutInput = {
  id: string
  data: UpdateLayoutSchema
}
export type SortComponentInput = {
  label?: (Sort | null)
  name?: (Sort | null)
  fieldType?: (Sort | null)
  props?: (Sort | null)
  componentType?: (Sort | null)
  validations?: (Sort | null)
  options?: (Sort | null)
}
export type WhereComponentInput = {
  id?: (WhereId | null)
  label?: (WhereString | null)
  name?: (WhereString | null)
  fieldType?: (WhereString | null)
  props?: (WhereString | null)
  componentType?: (ComponentComponenttypeEnumType | null)
  validations?: (WhereString | null)
  options?: (WhereString | null)
  AND?: (WhereComponentInput | null)[]
  OR?: (WhereComponentInput | null)[]
}
export type CreateComponentInput = {
  label?: (string | null)
  name?: (string | null)
  fieldType?: (string | null)
  props?: (string | null)
  componentType?: (ComponentComponenttypeEnumType | null)
  validations?: (string | null)
  options?: (string | null)[]
}
export type UpdateComponentSchema = {
  label?: (string | null)
  name?: (string | null)
  fieldType?: (string | null)
  props?: (string | null)
  componentType?: (ComponentComponenttypeEnumType | null)
  validations?: (string | null)
  options?: (string | null)[]
}
export type UpdateComponentInput = {
  id: string
  data: UpdateComponentSchema
}
export type SortInsuranceInput = {
  requestId?: (Sort | null)
  clientName?: (Sort | null)
  buyerAddress?: (Sort | null)
  sellerAddress?: (Sort | null)
  insurerName?: (Sort | null)
  goodsName?: (Sort | null)
  vesselName?: (Sort | null)
}
export type WhereInsuranceInput = {
  id?: (WhereId | null)
  user?: (WhereId | null)
  serviceProvider?: (WhereId | null)
  requestId?: (WhereString | null)
  clientName?: (WhereString | null)
  buyerAddress?: (WhereString | null)
  sellerAddress?: (WhereString | null)
  insurerName?: (WhereString | null)
  goodsName?: (WhereString | null)
  vesselName?: (WhereString | null)
  invoice?: (WhereId | null)
  AND?: (WhereInsuranceInput | null)[]
  OR?: (WhereInsuranceInput | null)[]
}
export type CreateInsuranceInput = {
  user?: (string | null)
  serviceProvider?: (string | null)
  requestId?: (string | null)
  clientName?: (string | null)
  buyerAddress?: (string | null)
  sellerAddress?: (string | null)
  insurerName?: (string | null)
  goodsName?: (string | null)
  vesselName?: (string | null)
  invoice?: (string | null)
}
export type UpdateInsuranceSchema = {
  user?: (string | null)
  serviceProvider?: (string | null)
  requestId?: (string | null)
  clientName?: (string | null)
  buyerAddress?: (string | null)
  sellerAddress?: (string | null)
  insurerName?: (string | null)
  goodsName?: (string | null)
  vesselName?: (string | null)
  invoice?: (string | null)
}
export type UpdateInsuranceInput = {
  id: string
  data: UpdateInsuranceSchema
}
export type SortPaymentInput = {
  amount?: (Sort | null)
  mode?: (Sort | null)
  status?: (Sort | null)
  date?: (Sort | null)
  gateway?: (Sort | null)
}
export type WherePaymentInput = {
  id?: (WhereId | null)
  amount?: (WhereInt | null)
  opportunity?: (WhereId | null)
  mode?: (WhereString | null)
  status?: (WhereString | null)
  date?: (WhereString | null)
  gateway?: (WhereString | null)
  AND?: (WherePaymentInput | null)[]
  OR?: (WherePaymentInput | null)[]
}
export type CreatePaymentInput = {
  amount?: (number | null)
  opportunity?: (string | null)
  mode?: (string | null)
  status?: (string | null)
  date?: (string | null)
  gateway?: (string | null)
}
export type UpdatePaymentSchema = {
  amount?: (number | null)
  opportunity?: (string | null)
  mode?: (string | null)
  status?: (string | null)
  date?: (string | null)
  gateway?: (string | null)
}
export type UpdatePaymentInput = {
  id: string
  data: UpdatePaymentSchema
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  users: ObservableMap<string, UserModelType>,
  finances: ObservableMap<string, FinanceModelType>,
  profiles: ObservableMap<string, ProfileModelType>,
  units: ObservableMap<string, UnitModelType>,
  categories: ObservableMap<string, CategoryModelType>,
  products: ObservableMap<string, ProductModelType>,
  verifies: ObservableMap<string, VerifyModelType>,
  files: ObservableMap<string, FileModelType>,
  leads: ObservableMap<string, LeadModelType>,
  leadLines: ObservableMap<string, LeadLineModelType>,
  quotes: ObservableMap<string, QuoteModelType>,
  quoteLines: ObservableMap<string, QuoteLineModelType>,
  opportunities: ObservableMap<string, OpportunityModelType>,
  accounts: ObservableMap<string, AccountModelType>,
  contacts: ObservableMap<string, ContactModelType>,
  orders: ObservableMap<string, OrderModelType>,
  orderLines: ObservableMap<string, OrderLineModelType>,
  certifications: ObservableMap<string, CertificationModelType>,
  advisories: ObservableMap<string, AdvisoryModelType>,
  qGrades: ObservableMap<string, QGradeModelType>,
  carts: ObservableMap<string, CartModelType>,
  productAttributes: ObservableMap<string, ProductAttributeModelType>,
  opportunityLines: ObservableMap<string, OpportunityLineModelType>,
  records: ObservableMap<string, RecordModelType>,
  productRequests: ObservableMap<string, ProductRequestModelType>,
  layouts: ObservableMap<string, LayoutModelType>,
  components: ObservableMap<string, ComponentModelType>,
  insurances: ObservableMap<string, InsuranceModelType>,
  payments: ObservableMap<string, PaymentModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryHello="queryHello",
queryGenerateOTP="queryGenerateOTP",
queryGetFilteredData="queryGetFilteredData",
queryGetView="queryGetView",
queryAllUsers="queryAllUsers",
queryGetUser="queryGetUser",
queryAllFinances="queryAllFinances",
queryGetFinance="queryGetFinance",
queryAllProfiles="queryAllProfiles",
queryGetProfile="queryGetProfile",
queryAllUnits="queryAllUnits",
queryGetUnit="queryGetUnit",
queryAllCategorys="queryAllCategorys",
queryGetCategory="queryGetCategory",
queryAllProducts="queryAllProducts",
queryGetProduct="queryGetProduct",
queryAllVerifys="queryAllVerifys",
queryGetVerify="queryGetVerify",
queryAllFiles="queryAllFiles",
queryGetFile="queryGetFile",
queryAllLeads="queryAllLeads",
queryGetLead="queryGetLead",
queryAllLeadLines="queryAllLeadLines",
queryGetLeadLine="queryGetLeadLine",
queryAllQuotes="queryAllQuotes",
queryGetQuote="queryGetQuote",
queryAllQuoteLines="queryAllQuoteLines",
queryGetQuoteLine="queryGetQuoteLine",
queryAllOpportunitys="queryAllOpportunitys",
queryGetOpportunity="queryGetOpportunity",
queryAllAccounts="queryAllAccounts",
queryGetAccount="queryGetAccount",
queryAllContacts="queryAllContacts",
queryGetContact="queryGetContact",
queryAllOrders="queryAllOrders",
queryGetOrder="queryGetOrder",
queryAllOrderLines="queryAllOrderLines",
queryGetOrderLine="queryGetOrderLine",
queryAllCertifications="queryAllCertifications",
queryGetCertification="queryGetCertification",
queryAllAdvisorys="queryAllAdvisorys",
queryGetAdvisory="queryGetAdvisory",
queryAllQGrades="queryAllQGrades",
queryGetQGrade="queryGetQGrade",
queryAllCarts="queryAllCarts",
queryGetCart="queryGetCart",
queryAllProductAttributes="queryAllProductAttributes",
queryGetProductAttribute="queryGetProductAttribute",
queryAllOpportunityLines="queryAllOpportunityLines",
queryGetOpportunityLine="queryGetOpportunityLine",
queryAllRecords="queryAllRecords",
queryGetRecord="queryGetRecord",
queryAllProductRequests="queryAllProductRequests",
queryGetProductRequest="queryGetProductRequest",
queryAllLayouts="queryAllLayouts",
queryGetLayout="queryGetLayout",
queryAllComponents="queryAllComponents",
queryGetComponent="queryGetComponent",
queryAllInsurances="queryAllInsurances",
queryGetInsurance="queryGetInsurance",
queryAllPayments="queryAllPayments",
queryGetPayment="queryGetPayment"
}
export enum RootStoreBaseMutations {
mutateSignUp="mutateSignUp",
mutateVerifyOTP="mutateVerifyOTP",
mutateLogin="mutateLogin",
mutateSendOtpForForgetPassword="mutateSendOtpForForgetPassword",
mutateSetNewPassword="mutateSetNewPassword",
mutateCreateUser="mutateCreateUser",
mutateCreateUsers="mutateCreateUsers",
mutateUpdateUser="mutateUpdateUser",
mutateUpdateUsers="mutateUpdateUsers",
mutateDeleteUser="mutateDeleteUser",
mutateDeleteUsers="mutateDeleteUsers",
mutateCreateFinance="mutateCreateFinance",
mutateCreateFinances="mutateCreateFinances",
mutateUpdateFinance="mutateUpdateFinance",
mutateUpdateFinances="mutateUpdateFinances",
mutateDeleteFinance="mutateDeleteFinance",
mutateDeleteFinances="mutateDeleteFinances",
mutateCreateProfile="mutateCreateProfile",
mutateCreateProfiles="mutateCreateProfiles",
mutateUpdateProfile="mutateUpdateProfile",
mutateUpdateProfiles="mutateUpdateProfiles",
mutateDeleteProfile="mutateDeleteProfile",
mutateDeleteProfiles="mutateDeleteProfiles",
mutateCreateUnit="mutateCreateUnit",
mutateCreateUnits="mutateCreateUnits",
mutateUpdateUnit="mutateUpdateUnit",
mutateUpdateUnits="mutateUpdateUnits",
mutateDeleteUnit="mutateDeleteUnit",
mutateDeleteUnits="mutateDeleteUnits",
mutateCreateCategory="mutateCreateCategory",
mutateCreateCategorys="mutateCreateCategorys",
mutateUpdateCategory="mutateUpdateCategory",
mutateUpdateCategorys="mutateUpdateCategorys",
mutateDeleteCategory="mutateDeleteCategory",
mutateDeleteCategorys="mutateDeleteCategorys",
mutateCreateProduct="mutateCreateProduct",
mutateCreateProducts="mutateCreateProducts",
mutateUpdateProduct="mutateUpdateProduct",
mutateUpdateProducts="mutateUpdateProducts",
mutateDeleteProduct="mutateDeleteProduct",
mutateDeleteProducts="mutateDeleteProducts",
mutateCreateVerify="mutateCreateVerify",
mutateCreateVerifys="mutateCreateVerifys",
mutateUpdateVerify="mutateUpdateVerify",
mutateUpdateVerifys="mutateUpdateVerifys",
mutateDeleteVerify="mutateDeleteVerify",
mutateDeleteVerifys="mutateDeleteVerifys",
mutateCreateFile="mutateCreateFile",
mutateCreateFiles="mutateCreateFiles",
mutateUpdateFile="mutateUpdateFile",
mutateUpdateFiles="mutateUpdateFiles",
mutateDeleteFile="mutateDeleteFile",
mutateDeleteFiles="mutateDeleteFiles",
mutateCreateLead="mutateCreateLead",
mutateCreateLeads="mutateCreateLeads",
mutateUpdateLead="mutateUpdateLead",
mutateUpdateLeads="mutateUpdateLeads",
mutateDeleteLead="mutateDeleteLead",
mutateDeleteLeads="mutateDeleteLeads",
mutateCreateLeadLine="mutateCreateLeadLine",
mutateCreateLeadLines="mutateCreateLeadLines",
mutateUpdateLeadLine="mutateUpdateLeadLine",
mutateUpdateLeadLines="mutateUpdateLeadLines",
mutateDeleteLeadLine="mutateDeleteLeadLine",
mutateDeleteLeadLines="mutateDeleteLeadLines",
mutateCreateQuote="mutateCreateQuote",
mutateCreateQuotes="mutateCreateQuotes",
mutateUpdateQuote="mutateUpdateQuote",
mutateUpdateQuotes="mutateUpdateQuotes",
mutateDeleteQuote="mutateDeleteQuote",
mutateDeleteQuotes="mutateDeleteQuotes",
mutateCreateQuoteLine="mutateCreateQuoteLine",
mutateCreateQuoteLines="mutateCreateQuoteLines",
mutateUpdateQuoteLine="mutateUpdateQuoteLine",
mutateUpdateQuoteLines="mutateUpdateQuoteLines",
mutateDeleteQuoteLine="mutateDeleteQuoteLine",
mutateDeleteQuoteLines="mutateDeleteQuoteLines",
mutateCreateOpportunity="mutateCreateOpportunity",
mutateCreateOpportunitys="mutateCreateOpportunitys",
mutateUpdateOpportunity="mutateUpdateOpportunity",
mutateUpdateOpportunitys="mutateUpdateOpportunitys",
mutateDeleteOpportunity="mutateDeleteOpportunity",
mutateDeleteOpportunitys="mutateDeleteOpportunitys",
mutateCreateAccount="mutateCreateAccount",
mutateCreateAccounts="mutateCreateAccounts",
mutateUpdateAccount="mutateUpdateAccount",
mutateUpdateAccounts="mutateUpdateAccounts",
mutateDeleteAccount="mutateDeleteAccount",
mutateDeleteAccounts="mutateDeleteAccounts",
mutateCreateContact="mutateCreateContact",
mutateCreateContacts="mutateCreateContacts",
mutateUpdateContact="mutateUpdateContact",
mutateUpdateContacts="mutateUpdateContacts",
mutateDeleteContact="mutateDeleteContact",
mutateDeleteContacts="mutateDeleteContacts",
mutateCreateOrder="mutateCreateOrder",
mutateCreateOrders="mutateCreateOrders",
mutateUpdateOrder="mutateUpdateOrder",
mutateUpdateOrders="mutateUpdateOrders",
mutateDeleteOrder="mutateDeleteOrder",
mutateDeleteOrders="mutateDeleteOrders",
mutateCreateOrderLine="mutateCreateOrderLine",
mutateCreateOrderLines="mutateCreateOrderLines",
mutateUpdateOrderLine="mutateUpdateOrderLine",
mutateUpdateOrderLines="mutateUpdateOrderLines",
mutateDeleteOrderLine="mutateDeleteOrderLine",
mutateDeleteOrderLines="mutateDeleteOrderLines",
mutateCreateCertification="mutateCreateCertification",
mutateCreateCertifications="mutateCreateCertifications",
mutateUpdateCertification="mutateUpdateCertification",
mutateUpdateCertifications="mutateUpdateCertifications",
mutateDeleteCertification="mutateDeleteCertification",
mutateDeleteCertifications="mutateDeleteCertifications",
mutateCreateAdvisory="mutateCreateAdvisory",
mutateCreateAdvisorys="mutateCreateAdvisorys",
mutateUpdateAdvisory="mutateUpdateAdvisory",
mutateUpdateAdvisorys="mutateUpdateAdvisorys",
mutateDeleteAdvisory="mutateDeleteAdvisory",
mutateDeleteAdvisorys="mutateDeleteAdvisorys",
mutateCreateQGrade="mutateCreateQGrade",
mutateCreateQGrades="mutateCreateQGrades",
mutateUpdateQGrade="mutateUpdateQGrade",
mutateUpdateQGrades="mutateUpdateQGrades",
mutateDeleteQGrade="mutateDeleteQGrade",
mutateDeleteQGrades="mutateDeleteQGrades",
mutateCreateCart="mutateCreateCart",
mutateCreateCarts="mutateCreateCarts",
mutateUpdateCart="mutateUpdateCart",
mutateUpdateCarts="mutateUpdateCarts",
mutateDeleteCart="mutateDeleteCart",
mutateDeleteCarts="mutateDeleteCarts",
mutateCreateProductAttribute="mutateCreateProductAttribute",
mutateCreateProductAttributes="mutateCreateProductAttributes",
mutateUpdateProductAttribute="mutateUpdateProductAttribute",
mutateUpdateProductAttributes="mutateUpdateProductAttributes",
mutateDeleteProductAttribute="mutateDeleteProductAttribute",
mutateDeleteProductAttributes="mutateDeleteProductAttributes",
mutateCreateOpportunityLine="mutateCreateOpportunityLine",
mutateCreateOpportunityLines="mutateCreateOpportunityLines",
mutateUpdateOpportunityLine="mutateUpdateOpportunityLine",
mutateUpdateOpportunityLines="mutateUpdateOpportunityLines",
mutateDeleteOpportunityLine="mutateDeleteOpportunityLine",
mutateDeleteOpportunityLines="mutateDeleteOpportunityLines",
mutateCreateRecord="mutateCreateRecord",
mutateCreateRecords="mutateCreateRecords",
mutateUpdateRecord="mutateUpdateRecord",
mutateUpdateRecords="mutateUpdateRecords",
mutateDeleteRecord="mutateDeleteRecord",
mutateDeleteRecords="mutateDeleteRecords",
mutateCreateProductRequest="mutateCreateProductRequest",
mutateCreateProductRequests="mutateCreateProductRequests",
mutateUpdateProductRequest="mutateUpdateProductRequest",
mutateUpdateProductRequests="mutateUpdateProductRequests",
mutateDeleteProductRequest="mutateDeleteProductRequest",
mutateDeleteProductRequests="mutateDeleteProductRequests",
mutateCreateLayout="mutateCreateLayout",
mutateCreateLayouts="mutateCreateLayouts",
mutateUpdateLayout="mutateUpdateLayout",
mutateUpdateLayouts="mutateUpdateLayouts",
mutateDeleteLayout="mutateDeleteLayout",
mutateDeleteLayouts="mutateDeleteLayouts",
mutateCreateComponent="mutateCreateComponent",
mutateCreateComponents="mutateCreateComponents",
mutateUpdateComponent="mutateUpdateComponent",
mutateUpdateComponents="mutateUpdateComponents",
mutateDeleteComponent="mutateDeleteComponent",
mutateDeleteComponents="mutateDeleteComponents",
mutateCreateInsurance="mutateCreateInsurance",
mutateCreateInsurances="mutateCreateInsurances",
mutateUpdateInsurance="mutateUpdateInsurance",
mutateUpdateInsurances="mutateUpdateInsurances",
mutateDeleteInsurance="mutateDeleteInsurance",
mutateDeleteInsurances="mutateDeleteInsurances",
mutateCreatePayment="mutateCreatePayment",
mutateCreatePayments="mutateCreatePayments",
mutateUpdatePayment="mutateUpdatePayment",
mutateUpdatePayments="mutateUpdatePayments",
mutateDeletePayment="mutateDeletePayment",
mutateDeletePayments="mutateDeletePayments"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['verifyOtpResponse', () => VerifyOtpResponseModel], ['FilterProductResponse', () => FilterProductResponseModel], ['OrderLineData', () => OrderLineDataModel], ['QuoteLineResponse', () => QuoteLineResponseModel], ['Image', () => ImageModel], ['ProductAttributeData', () => ProductAttributeDataModel], ['otpResponse', () => OtpResponseModel], ['Response', () => ResponseModel], ['loginResponse', () => LoginResponseModel], ['UserPagination', () => UserPaginationModel], ['User', () => UserModel], ['FinancePagination', () => FinancePaginationModel], ['Finance', () => FinanceModel], ['ProfilePagination', () => ProfilePaginationModel], ['Profile', () => ProfileModel], ['UnitPagination', () => UnitPaginationModel], ['Unit', () => UnitModel], ['CategoryPagination', () => CategoryPaginationModel], ['Category', () => CategoryModel], ['ProductPagination', () => ProductPaginationModel], ['Product', () => ProductModel], ['VerifyPagination', () => VerifyPaginationModel], ['Verify', () => VerifyModel], ['FilePagination', () => FilePaginationModel], ['File', () => FileModel], ['LeadPagination', () => LeadPaginationModel], ['Lead', () => LeadModel], ['LeadLinePagination', () => LeadLinePaginationModel], ['LeadLine', () => LeadLineModel], ['QuotePagination', () => QuotePaginationModel], ['Quote', () => QuoteModel], ['QuoteLinePagination', () => QuoteLinePaginationModel], ['QuoteLine', () => QuoteLineModel], ['OpportunityPagination', () => OpportunityPaginationModel], ['Opportunity', () => OpportunityModel], ['AccountPagination', () => AccountPaginationModel], ['Account', () => AccountModel], ['ContactPagination', () => ContactPaginationModel], ['Contact', () => ContactModel], ['OrderPagination', () => OrderPaginationModel], ['Order', () => OrderModel], ['OrderLinePagination', () => OrderLinePaginationModel], ['OrderLine', () => OrderLineModel], ['CertificationPagination', () => CertificationPaginationModel], ['Certification', () => CertificationModel], ['AdvisoryPagination', () => AdvisoryPaginationModel], ['Advisory', () => AdvisoryModel], ['QGradePagination', () => QGradePaginationModel], ['QGrade', () => QGradeModel], ['CartPagination', () => CartPaginationModel], ['Cart', () => CartModel], ['ProductAttributePagination', () => ProductAttributePaginationModel], ['ProductAttribute', () => ProductAttributeModel], ['OpportunityLinePagination', () => OpportunityLinePaginationModel], ['OpportunityLine', () => OpportunityLineModel], ['RecordPagination', () => RecordPaginationModel], ['Record', () => RecordModel], ['ProductRequestPagination', () => ProductRequestPaginationModel], ['ProductRequest', () => ProductRequestModel], ['LayoutPagination', () => LayoutPaginationModel], ['Layout', () => LayoutModel], ['ComponentPagination', () => ComponentPaginationModel], ['Component', () => ComponentModel], ['InsurancePagination', () => InsurancePaginationModel], ['Insurance', () => InsuranceModel], ['PaymentPagination', () => PaymentPaginationModel], ['Payment', () => PaymentModel]], ['User', 'Finance', 'Profile', 'Unit', 'Category', 'Product', 'Verify', 'File', 'Lead', 'LeadLine', 'Quote', 'QuoteLine', 'Opportunity', 'Account', 'Contact', 'Order', 'OrderLine', 'Certification', 'Advisory', 'QGrade', 'Cart', 'ProductAttribute', 'OpportunityLine', 'Record', 'ProductRequest', 'Layout', 'Component', 'Insurance', 'Payment'], "js"))
  .props({
    users: types.optional(types.map(types.late((): any => UserModel)), {}),
    finances: types.optional(types.map(types.late((): any => FinanceModel)), {}),
    profiles: types.optional(types.map(types.late((): any => ProfileModel)), {}),
    units: types.optional(types.map(types.late((): any => UnitModel)), {}),
    categories: types.optional(types.map(types.late((): any => CategoryModel)), {}),
    products: types.optional(types.map(types.late((): any => ProductModel)), {}),
    verifies: types.optional(types.map(types.late((): any => VerifyModel)), {}),
    files: types.optional(types.map(types.late((): any => FileModel)), {}),
    leads: types.optional(types.map(types.late((): any => LeadModel)), {}),
    leadLines: types.optional(types.map(types.late((): any => LeadLineModel)), {}),
    quotes: types.optional(types.map(types.late((): any => QuoteModel)), {}),
    quoteLines: types.optional(types.map(types.late((): any => QuoteLineModel)), {}),
    opportunities: types.optional(types.map(types.late((): any => OpportunityModel)), {}),
    accounts: types.optional(types.map(types.late((): any => AccountModel)), {}),
    contacts: types.optional(types.map(types.late((): any => ContactModel)), {}),
    orders: types.optional(types.map(types.late((): any => OrderModel)), {}),
    orderLines: types.optional(types.map(types.late((): any => OrderLineModel)), {}),
    certifications: types.optional(types.map(types.late((): any => CertificationModel)), {}),
    advisories: types.optional(types.map(types.late((): any => AdvisoryModel)), {}),
    qGrades: types.optional(types.map(types.late((): any => QGradeModel)), {}),
    carts: types.optional(types.map(types.late((): any => CartModel)), {}),
    productAttributes: types.optional(types.map(types.late((): any => ProductAttributeModel)), {}),
    opportunityLines: types.optional(types.map(types.late((): any => OpportunityLineModel)), {}),
    records: types.optional(types.map(types.late((): any => RecordModel)), {}),
    productRequests: types.optional(types.map(types.late((): any => ProductRequestModel)), {}),
    layouts: types.optional(types.map(types.late((): any => LayoutModel)), {}),
    components: types.optional(types.map(types.late((): any => ComponentModel)), {}),
    insurances: types.optional(types.map(types.late((): any => InsuranceModel)), {}),
    payments: types.optional(types.map(types.late((): any => PaymentModel)), {})
  })
  .actions(self => ({
    queryHello(variables: { name?: (string | null) }, options: QueryOptions = {}) {
      return self.query<{ hello: string }>(`query hello($name: String) { hello(name: $name) }`, variables, options)
    },
    queryGenerateOTP(variables: { email: string }, resultSelector: string | ((qb: OtpResponseModelSelector) => OtpResponseModelSelector) = otpResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ generateOTP: OtpResponseModelType}>(`query generateOTP($email: String!) { generateOTP(email: $email) {
        ${typeof resultSelector === "function" ? resultSelector(new OtpResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetFilteredData(variables: { filterParams?: (FilterParams | null) }, resultSelector: string | ((qb: FilterProductResponseModelSelector) => FilterProductResponseModelSelector) = filterProductResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFilteredData: FilterProductResponseModelType[]}>(`query getFilteredData($filterParams: filterParams) { getFilteredData(filterParams: $filterParams) {
        ${typeof resultSelector === "function" ? resultSelector(new FilterProductResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetView(variables: { path?: (string | null) }, options: QueryOptions = {}) {
      return self.query<{ getView: any }>(`query getView($path: String) { getView(path: $path) }`, variables, options)
    },
    queryAllUsers(variables: { where?: (WhereUserInput | null), sort?: (SortUserInput | null), offset: number, limit: number }, resultSelector: string | ((qb: UserPaginationModelSelector) => UserPaginationModelSelector) = userPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allUsers: UserPaginationModelType}>(`query allUsers($where: whereUserInput, $sort: sortUserInput, $offset: Int!, $limit: Int!) { allUsers(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new UserPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetUser(variables: { where?: (WhereUserInput | null) }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getUser: UserModelType}>(`query getUser($where: whereUserInput) { getUser(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllFinances(variables: { where?: (WhereFinanceInput | null), sort?: (SortFinanceInput | null), offset: number, limit: number }, resultSelector: string | ((qb: FinancePaginationModelSelector) => FinancePaginationModelSelector) = financePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allFinances: FinancePaginationModelType}>(`query allFinances($where: whereFinanceInput, $sort: sortFinanceInput, $offset: Int!, $limit: Int!) { allFinances(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new FinancePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetFinance(variables: { where?: (WhereFinanceInput | null) }, resultSelector: string | ((qb: FinanceModelSelector) => FinanceModelSelector) = financeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFinance: FinanceModelType}>(`query getFinance($where: whereFinanceInput) { getFinance(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new FinanceModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllProfiles(variables: { where?: (WhereProfileInput | null), sort?: (SortProfileInput | null), offset: number, limit: number }, resultSelector: string | ((qb: ProfilePaginationModelSelector) => ProfilePaginationModelSelector) = profilePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProfiles: ProfilePaginationModelType}>(`query allProfiles($where: whereProfileInput, $sort: sortProfileInput, $offset: Int!, $limit: Int!) { allProfiles(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new ProfilePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetProfile(variables: { where?: (WhereProfileInput | null) }, resultSelector: string | ((qb: ProfileModelSelector) => ProfileModelSelector) = profileModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getProfile: ProfileModelType}>(`query getProfile($where: whereProfileInput) { getProfile(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new ProfileModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllUnits(variables: { where?: (WhereUnitInput | null), sort?: (SortUnitInput | null), offset: number, limit: number }, resultSelector: string | ((qb: UnitPaginationModelSelector) => UnitPaginationModelSelector) = unitPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allUnits: UnitPaginationModelType}>(`query allUnits($where: whereUnitInput, $sort: sortUnitInput, $offset: Int!, $limit: Int!) { allUnits(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new UnitPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetUnit(variables: { where?: (WhereUnitInput | null) }, resultSelector: string | ((qb: UnitModelSelector) => UnitModelSelector) = unitModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getUnit: UnitModelType}>(`query getUnit($where: whereUnitInput) { getUnit(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UnitModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllCategorys(variables: { where?: (WhereCategoryInput | null), sort?: (SortCategoryInput | null), offset: number, limit: number }, resultSelector: string | ((qb: CategoryPaginationModelSelector) => CategoryPaginationModelSelector) = categoryPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allCategorys: CategoryPaginationModelType}>(`query allCategorys($where: whereCategoryInput, $sort: sortCategoryInput, $offset: Int!, $limit: Int!) { allCategorys(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetCategory(variables: { where?: (WhereCategoryInput | null) }, resultSelector: string | ((qb: CategoryModelSelector) => CategoryModelSelector) = categoryModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCategory: CategoryModelType}>(`query getCategory($where: whereCategoryInput) { getCategory(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllProducts(variables: { where?: (WhereProductInput | null), sort?: (SortProductInput | null), offset: number, limit: number }, resultSelector: string | ((qb: ProductPaginationModelSelector) => ProductPaginationModelSelector) = productPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProducts: ProductPaginationModelType}>(`query allProducts($where: whereProductInput, $sort: sortProductInput, $offset: Int!, $limit: Int!) { allProducts(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetProduct(variables: { where?: (WhereProductInput | null) }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getProduct: ProductModelType}>(`query getProduct($where: whereProductInput) { getProduct(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllVerifys(variables: { where?: (WhereVerifyInput | null), sort?: (SortVerifyInput | null), offset: number, limit: number }, resultSelector: string | ((qb: VerifyPaginationModelSelector) => VerifyPaginationModelSelector) = verifyPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allVerifys: VerifyPaginationModelType}>(`query allVerifys($where: whereVerifyInput, $sort: sortVerifyInput, $offset: Int!, $limit: Int!) { allVerifys(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new VerifyPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetVerify(variables: { where?: (WhereVerifyInput | null) }, resultSelector: string | ((qb: VerifyModelSelector) => VerifyModelSelector) = verifyModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getVerify: VerifyModelType}>(`query getVerify($where: whereVerifyInput) { getVerify(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new VerifyModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllFiles(variables: { where?: (WhereFileInput | null), sort?: (SortFileInput | null), offset: number, limit: number }, resultSelector: string | ((qb: FilePaginationModelSelector) => FilePaginationModelSelector) = filePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allFiles: FilePaginationModelType}>(`query allFiles($where: whereFileInput, $sort: sortFileInput, $offset: Int!, $limit: Int!) { allFiles(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new FilePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetFile(variables: { where?: (WhereFileInput | null) }, resultSelector: string | ((qb: FileModelSelector) => FileModelSelector) = fileModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFile: FileModelType}>(`query getFile($where: whereFileInput) { getFile(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new FileModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllLeads(variables: { where?: (WhereLeadInput | null), sort?: (SortLeadInput | null), offset: number, limit: number }, resultSelector: string | ((qb: LeadPaginationModelSelector) => LeadPaginationModelSelector) = leadPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allLeads: LeadPaginationModelType}>(`query allLeads($where: whereLeadInput, $sort: sortLeadInput, $offset: Int!, $limit: Int!) { allLeads(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetLead(variables: { where?: (WhereLeadInput | null) }, resultSelector: string | ((qb: LeadModelSelector) => LeadModelSelector) = leadModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getLead: LeadModelType}>(`query getLead($where: whereLeadInput) { getLead(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllLeadLines(variables: { where?: (WhereLeadLineInput | null), sort?: (SortLeadLineInput | null), offset: number, limit: number }, resultSelector: string | ((qb: LeadLinePaginationModelSelector) => LeadLinePaginationModelSelector) = leadLinePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allLeadLines: LeadLinePaginationModelType}>(`query allLeadLines($where: whereLeadLineInput, $sort: sortLeadLineInput, $offset: Int!, $limit: Int!) { allLeadLines(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadLinePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetLeadLine(variables: { where?: (WhereLeadLineInput | null) }, resultSelector: string | ((qb: LeadLineModelSelector) => LeadLineModelSelector) = leadLineModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getLeadLine: LeadLineModelType}>(`query getLeadLine($where: whereLeadLineInput) { getLeadLine(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadLineModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllQuotes(variables: { where?: (WhereQuoteInput | null), sort?: (SortQuoteInput | null), offset: number, limit: number }, resultSelector: string | ((qb: QuotePaginationModelSelector) => QuotePaginationModelSelector) = quotePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allQuotes: QuotePaginationModelType}>(`query allQuotes($where: whereQuoteInput, $sort: sortQuoteInput, $offset: Int!, $limit: Int!) { allQuotes(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new QuotePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetQuote(variables: { where?: (WhereQuoteInput | null) }, resultSelector: string | ((qb: QuoteModelSelector) => QuoteModelSelector) = quoteModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getQuote: QuoteModelType}>(`query getQuote($where: whereQuoteInput) { getQuote(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllQuoteLines(variables: { where?: (WhereQuoteLineInput | null), sort?: (SortQuoteLineInput | null), offset: number, limit: number }, resultSelector: string | ((qb: QuoteLinePaginationModelSelector) => QuoteLinePaginationModelSelector) = quoteLinePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allQuoteLines: QuoteLinePaginationModelType}>(`query allQuoteLines($where: whereQuoteLineInput, $sort: sortQuoteLineInput, $offset: Int!, $limit: Int!) { allQuoteLines(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteLinePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetQuoteLine(variables: { where?: (WhereQuoteLineInput | null) }, resultSelector: string | ((qb: QuoteLineModelSelector) => QuoteLineModelSelector) = quoteLineModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getQuoteLine: QuoteLineModelType}>(`query getQuoteLine($where: whereQuoteLineInput) { getQuoteLine(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteLineModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllOpportunitys(variables: { where?: (WhereOpportunityInput | null), sort?: (SortOpportunityInput | null), offset: number, limit: number }, resultSelector: string | ((qb: OpportunityPaginationModelSelector) => OpportunityPaginationModelSelector) = opportunityPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allOpportunitys: OpportunityPaginationModelType}>(`query allOpportunitys($where: whereOpportunityInput, $sort: sortOpportunityInput, $offset: Int!, $limit: Int!) { allOpportunitys(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOpportunity(variables: { where?: (WhereOpportunityInput | null) }, resultSelector: string | ((qb: OpportunityModelSelector) => OpportunityModelSelector) = opportunityModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOpportunity: OpportunityModelType}>(`query getOpportunity($where: whereOpportunityInput) { getOpportunity(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllAccounts(variables: { where?: (WhereAccountInput | null), sort?: (SortAccountInput | null), offset: number, limit: number }, resultSelector: string | ((qb: AccountPaginationModelSelector) => AccountPaginationModelSelector) = accountPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allAccounts: AccountPaginationModelType}>(`query allAccounts($where: whereAccountInput, $sort: sortAccountInput, $offset: Int!, $limit: Int!) { allAccounts(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new AccountPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetAccount(variables: { where?: (WhereAccountInput | null) }, resultSelector: string | ((qb: AccountModelSelector) => AccountModelSelector) = accountModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getAccount: AccountModelType}>(`query getAccount($where: whereAccountInput) { getAccount(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new AccountModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllContacts(variables: { where?: (WhereContactInput | null), sort?: (SortContactInput | null), offset: number, limit: number }, resultSelector: string | ((qb: ContactPaginationModelSelector) => ContactPaginationModelSelector) = contactPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allContacts: ContactPaginationModelType}>(`query allContacts($where: whereContactInput, $sort: sortContactInput, $offset: Int!, $limit: Int!) { allContacts(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new ContactPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetContact(variables: { where?: (WhereContactInput | null) }, resultSelector: string | ((qb: ContactModelSelector) => ContactModelSelector) = contactModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getContact: ContactModelType}>(`query getContact($where: whereContactInput) { getContact(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new ContactModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllOrders(variables: { where?: (WhereOrderInput | null), sort?: (SortOrderInput | null), offset: number, limit: number }, resultSelector: string | ((qb: OrderPaginationModelSelector) => OrderPaginationModelSelector) = orderPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allOrders: OrderPaginationModelType}>(`query allOrders($where: whereOrderInput, $sort: sortOrderInput, $offset: Int!, $limit: Int!) { allOrders(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOrder(variables: { where?: (WhereOrderInput | null) }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOrder: OrderModelType}>(`query getOrder($where: whereOrderInput) { getOrder(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllOrderLines(variables: { where?: (WhereOrderLineInput | null), sort?: (SortOrderLineInput | null), offset: number, limit: number }, resultSelector: string | ((qb: OrderLinePaginationModelSelector) => OrderLinePaginationModelSelector) = orderLinePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allOrderLines: OrderLinePaginationModelType}>(`query allOrderLines($where: whereOrderLineInput, $sort: sortOrderLineInput, $offset: Int!, $limit: Int!) { allOrderLines(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderLinePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOrderLine(variables: { where?: (WhereOrderLineInput | null) }, resultSelector: string | ((qb: OrderLineModelSelector) => OrderLineModelSelector) = orderLineModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOrderLine: OrderLineModelType}>(`query getOrderLine($where: whereOrderLineInput) { getOrderLine(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderLineModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllCertifications(variables: { where?: (WhereCertificationInput | null), sort?: (SortCertificationInput | null), offset: number, limit: number }, resultSelector: string | ((qb: CertificationPaginationModelSelector) => CertificationPaginationModelSelector) = certificationPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allCertifications: CertificationPaginationModelType}>(`query allCertifications($where: whereCertificationInput, $sort: sortCertificationInput, $offset: Int!, $limit: Int!) { allCertifications(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new CertificationPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetCertification(variables: { where?: (WhereCertificationInput | null) }, resultSelector: string | ((qb: CertificationModelSelector) => CertificationModelSelector) = certificationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCertification: CertificationModelType}>(`query getCertification($where: whereCertificationInput) { getCertification(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new CertificationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllAdvisorys(variables: { where?: (WhereAdvisoryInput | null), sort?: (SortAdvisoryInput | null), offset: number, limit: number }, resultSelector: string | ((qb: AdvisoryPaginationModelSelector) => AdvisoryPaginationModelSelector) = advisoryPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allAdvisorys: AdvisoryPaginationModelType}>(`query allAdvisorys($where: whereAdvisoryInput, $sort: sortAdvisoryInput, $offset: Int!, $limit: Int!) { allAdvisorys(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new AdvisoryPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetAdvisory(variables: { where?: (WhereAdvisoryInput | null) }, resultSelector: string | ((qb: AdvisoryModelSelector) => AdvisoryModelSelector) = advisoryModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getAdvisory: AdvisoryModelType}>(`query getAdvisory($where: whereAdvisoryInput) { getAdvisory(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new AdvisoryModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllQGrades(variables: { where?: (WhereQGradeInput | null), sort?: (SortQGradeInput | null), offset: number, limit: number }, resultSelector: string | ((qb: QGradePaginationModelSelector) => QGradePaginationModelSelector) = qGradePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allQGrades: QGradePaginationModelType}>(`query allQGrades($where: whereQGradeInput, $sort: sortQGradeInput, $offset: Int!, $limit: Int!) { allQGrades(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new QGradePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetQGrade(variables: { where?: (WhereQGradeInput | null) }, resultSelector: string | ((qb: QGradeModelSelector) => QGradeModelSelector) = qGradeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getQGrade: QGradeModelType}>(`query getQGrade($where: whereQGradeInput) { getQGrade(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new QGradeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllCarts(variables: { where?: (WhereCartInput | null), sort?: (SortCartInput | null), offset: number, limit: number }, resultSelector: string | ((qb: CartPaginationModelSelector) => CartPaginationModelSelector) = cartPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allCarts: CartPaginationModelType}>(`query allCarts($where: whereCartInput, $sort: sortCartInput, $offset: Int!, $limit: Int!) { allCarts(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new CartPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetCart(variables: { where?: (WhereCartInput | null) }, resultSelector: string | ((qb: CartModelSelector) => CartModelSelector) = cartModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCart: CartModelType}>(`query getCart($where: whereCartInput) { getCart(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new CartModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllProductAttributes(variables: { where?: (WhereProductAttributeInput | null), sort?: (SortProductAttributeInput | null), offset: number, limit: number }, resultSelector: string | ((qb: ProductAttributePaginationModelSelector) => ProductAttributePaginationModelSelector) = productAttributePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductAttributes: ProductAttributePaginationModelType}>(`query allProductAttributes($where: whereProductAttributeInput, $sort: sortProductAttributeInput, $offset: Int!, $limit: Int!) { allProductAttributes(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductAttributePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetProductAttribute(variables: { where?: (WhereProductAttributeInput | null) }, resultSelector: string | ((qb: ProductAttributeModelSelector) => ProductAttributeModelSelector) = productAttributeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getProductAttribute: ProductAttributeModelType}>(`query getProductAttribute($where: whereProductAttributeInput) { getProductAttribute(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductAttributeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllOpportunityLines(variables: { where?: (WhereOpportunityLineInput | null), sort?: (SortOpportunityLineInput | null), offset: number, limit: number }, resultSelector: string | ((qb: OpportunityLinePaginationModelSelector) => OpportunityLinePaginationModelSelector) = opportunityLinePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allOpportunityLines: OpportunityLinePaginationModelType}>(`query allOpportunityLines($where: whereOpportunityLineInput, $sort: sortOpportunityLineInput, $offset: Int!, $limit: Int!) { allOpportunityLines(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityLinePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOpportunityLine(variables: { where?: (WhereOpportunityLineInput | null) }, resultSelector: string | ((qb: OpportunityLineModelSelector) => OpportunityLineModelSelector) = opportunityLineModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOpportunityLine: OpportunityLineModelType}>(`query getOpportunityLine($where: whereOpportunityLineInput) { getOpportunityLine(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityLineModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllRecords(variables: { where?: (WhereRecordInput | null), sort?: (SortRecordInput | null), offset: number, limit: number }, resultSelector: string | ((qb: RecordPaginationModelSelector) => RecordPaginationModelSelector) = recordPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allRecords: RecordPaginationModelType}>(`query allRecords($where: whereRecordInput, $sort: sortRecordInput, $offset: Int!, $limit: Int!) { allRecords(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new RecordPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetRecord(variables: { where?: (WhereRecordInput | null) }, resultSelector: string | ((qb: RecordModelSelector) => RecordModelSelector) = recordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getRecord: RecordModelType}>(`query getRecord($where: whereRecordInput) { getRecord(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new RecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllProductRequests(variables: { where?: (WhereProductRequestInput | null), sort?: (SortProductRequestInput | null), offset: number, limit: number }, resultSelector: string | ((qb: ProductRequestPaginationModelSelector) => ProductRequestPaginationModelSelector) = productRequestPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductRequests: ProductRequestPaginationModelType}>(`query allProductRequests($where: whereProductRequestInput, $sort: sortProductRequestInput, $offset: Int!, $limit: Int!) { allProductRequests(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductRequestPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetProductRequest(variables: { where?: (WhereProductRequestInput | null) }, resultSelector: string | ((qb: ProductRequestModelSelector) => ProductRequestModelSelector) = productRequestModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getProductRequest: ProductRequestModelType}>(`query getProductRequest($where: whereProductRequestInput) { getProductRequest(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductRequestModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllLayouts(variables: { where?: (WhereLayoutInput | null), sort?: (SortLayoutInput | null), offset: number, limit: number }, resultSelector: string | ((qb: LayoutPaginationModelSelector) => LayoutPaginationModelSelector) = layoutPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allLayouts: LayoutPaginationModelType}>(`query allLayouts($where: whereLayoutInput, $sort: sortLayoutInput, $offset: Int!, $limit: Int!) { allLayouts(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new LayoutPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetLayout(variables: { where?: (WhereLayoutInput | null) }, resultSelector: string | ((qb: LayoutModelSelector) => LayoutModelSelector) = layoutModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getLayout: LayoutModelType}>(`query getLayout($where: whereLayoutInput) { getLayout(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new LayoutModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllComponents(variables: { where?: (WhereComponentInput | null), sort?: (SortComponentInput | null), offset: number, limit: number }, resultSelector: string | ((qb: ComponentPaginationModelSelector) => ComponentPaginationModelSelector) = componentPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allComponents: ComponentPaginationModelType}>(`query allComponents($where: whereComponentInput, $sort: sortComponentInput, $offset: Int!, $limit: Int!) { allComponents(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new ComponentPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetComponent(variables: { where?: (WhereComponentInput | null) }, resultSelector: string | ((qb: ComponentModelSelector) => ComponentModelSelector) = componentModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getComponent: ComponentModelType}>(`query getComponent($where: whereComponentInput) { getComponent(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new ComponentModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllInsurances(variables: { where?: (WhereInsuranceInput | null), sort?: (SortInsuranceInput | null), offset: number, limit: number }, resultSelector: string | ((qb: InsurancePaginationModelSelector) => InsurancePaginationModelSelector) = insurancePaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allInsurances: InsurancePaginationModelType}>(`query allInsurances($where: whereInsuranceInput, $sort: sortInsuranceInput, $offset: Int!, $limit: Int!) { allInsurances(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new InsurancePaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetInsurance(variables: { where?: (WhereInsuranceInput | null) }, resultSelector: string | ((qb: InsuranceModelSelector) => InsuranceModelSelector) = insuranceModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getInsurance: InsuranceModelType}>(`query getInsurance($where: whereInsuranceInput) { getInsurance(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new InsuranceModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllPayments(variables: { where?: (WherePaymentInput | null), sort?: (SortPaymentInput | null), offset: number, limit: number }, resultSelector: string | ((qb: PaymentPaginationModelSelector) => PaymentPaginationModelSelector) = paymentPaginationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allPayments: PaymentPaginationModelType}>(`query allPayments($where: wherePaymentInput, $sort: sortPaymentInput, $offset: Int!, $limit: Int!) { allPayments(where: $where, sort: $sort, offset: $offset, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentPaginationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetPayment(variables: { where?: (WherePaymentInput | null) }, resultSelector: string | ((qb: PaymentModelSelector) => PaymentModelSelector) = paymentModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getPayment: PaymentModelType}>(`query getPayment($where: wherePaymentInput) { getPayment(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateSignUp(variables: { signUpData?: (SignUpData | null) }, resultSelector: string | ((qb: ResponseModelSelector) => ResponseModelSelector) = responseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ signUp: ResponseModelType}>(`mutation signUp($signUpData: signUpData) { signUp(signUpData: $signUpData) {
        ${typeof resultSelector === "function" ? resultSelector(new ResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateVerifyOTP(variables: { email: string, otp: number }, resultSelector: string | ((qb: VerifyOtpResponseModelSelector) => VerifyOtpResponseModelSelector) = verifyOtpResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ verifyOTP: VerifyOtpResponseModelType}>(`mutation verifyOTP($email: String!, $otp: Int!) { verifyOTP(email: $email, otp: $otp) {
        ${typeof resultSelector === "function" ? resultSelector(new VerifyOtpResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateLogin(variables: { email?: (string | null), password?: (string | null) }, resultSelector: string | ((qb: LoginResponseModelSelector) => LoginResponseModelSelector) = loginResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ login: LoginResponseModelType}>(`mutation login($email: String, $password: String) { login(email: $email, password: $password) {
        ${typeof resultSelector === "function" ? resultSelector(new LoginResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSendOtpForForgetPassword(variables: { email: string }, resultSelector: string | ((qb: OtpResponseModelSelector) => OtpResponseModelSelector) = otpResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ sendOtpForForgetPassword: OtpResponseModelType}>(`mutation sendOtpForForgetPassword($email: String!) { sendOtpForForgetPassword(email: $email) {
        ${typeof resultSelector === "function" ? resultSelector(new OtpResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSetNewPassword(variables: { email: string, password: string }, resultSelector: string | ((qb: ResponseModelSelector) => ResponseModelSelector) = responseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ setNewPassword: ResponseModelType}>(`mutation setNewPassword($email: String!, $password: String!) { setNewPassword(email: $email, password: $password) {
        ${typeof resultSelector === "function" ? resultSelector(new ResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateUser(variables: { data: CreateUserInput }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUser: UserModelType}>(`mutation createUser($data: createUserInput!) { createUser(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateUsers(variables: { data: CreateUserInput[] }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUsers: UserModelType[]}>(`mutation createUsers($data: [createUserInput!]!) { createUsers(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUser(variables: { id: string, data: UpdateUserSchema }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUser: UserModelType}>(`mutation updateUser($id: ID!, $data: updateUserSchema!) { updateUser(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUsers(variables: { data: UpdateUserInput[] }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUsers: UserModelType[]}>(`mutation updateUsers($data: [updateUserInput!]!) { updateUsers(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteUser(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUser: boolean }>(`mutation deleteUser($id: ID!) { deleteUser(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteUsers(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUsers: boolean }>(`mutation deleteUsers($ids: [ID!]) { deleteUsers(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateFinance(variables: { data: CreateFinanceInput }, resultSelector: string | ((qb: FinanceModelSelector) => FinanceModelSelector) = financeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createFinance: FinanceModelType}>(`mutation createFinance($data: createFinanceInput!) { createFinance(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new FinanceModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateFinances(variables: { data: CreateFinanceInput[] }, resultSelector: string | ((qb: FinanceModelSelector) => FinanceModelSelector) = financeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createFinances: FinanceModelType[]}>(`mutation createFinances($data: [createFinanceInput!]!) { createFinances(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new FinanceModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFinance(variables: { id: string, data: UpdateFinanceSchema }, resultSelector: string | ((qb: FinanceModelSelector) => FinanceModelSelector) = financeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFinance: FinanceModelType}>(`mutation updateFinance($id: ID!, $data: updateFinanceSchema!) { updateFinance(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new FinanceModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFinances(variables: { data: UpdateFinanceInput[] }, resultSelector: string | ((qb: FinanceModelSelector) => FinanceModelSelector) = financeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFinances: FinanceModelType[]}>(`mutation updateFinances($data: [updateFinanceInput!]!) { updateFinances(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new FinanceModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteFinance(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteFinance: boolean }>(`mutation deleteFinance($id: ID!) { deleteFinance(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteFinances(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteFinances: boolean }>(`mutation deleteFinances($ids: [ID!]) { deleteFinances(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateProfile(variables: { data: CreateProfileInput }, resultSelector: string | ((qb: ProfileModelSelector) => ProfileModelSelector) = profileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProfile: ProfileModelType}>(`mutation createProfile($data: createProfileInput!) { createProfile(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProfileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateProfiles(variables: { data: CreateProfileInput[] }, resultSelector: string | ((qb: ProfileModelSelector) => ProfileModelSelector) = profileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProfiles: ProfileModelType[]}>(`mutation createProfiles($data: [createProfileInput!]!) { createProfiles(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProfileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProfile(variables: { id: string, data: UpdateProfileSchema }, resultSelector: string | ((qb: ProfileModelSelector) => ProfileModelSelector) = profileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProfile: ProfileModelType}>(`mutation updateProfile($id: ID!, $data: updateProfileSchema!) { updateProfile(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProfileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProfiles(variables: { data: UpdateProfileInput[] }, resultSelector: string | ((qb: ProfileModelSelector) => ProfileModelSelector) = profileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProfiles: ProfileModelType[]}>(`mutation updateProfiles($data: [updateProfileInput!]!) { updateProfiles(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProfileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteProfile(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProfile: boolean }>(`mutation deleteProfile($id: ID!) { deleteProfile(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteProfiles(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProfiles: boolean }>(`mutation deleteProfiles($ids: [ID!]) { deleteProfiles(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateUnit(variables: { data: CreateUnitInput }, resultSelector: string | ((qb: UnitModelSelector) => UnitModelSelector) = unitModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUnit: UnitModelType}>(`mutation createUnit($data: createUnitInput!) { createUnit(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UnitModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateUnits(variables: { data: CreateUnitInput[] }, resultSelector: string | ((qb: UnitModelSelector) => UnitModelSelector) = unitModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUnits: UnitModelType[]}>(`mutation createUnits($data: [createUnitInput!]!) { createUnits(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UnitModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUnit(variables: { id: string, data: UpdateUnitSchema }, resultSelector: string | ((qb: UnitModelSelector) => UnitModelSelector) = unitModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUnit: UnitModelType}>(`mutation updateUnit($id: ID!, $data: updateUnitSchema!) { updateUnit(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UnitModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUnits(variables: { data: UpdateUnitInput[] }, resultSelector: string | ((qb: UnitModelSelector) => UnitModelSelector) = unitModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUnits: UnitModelType[]}>(`mutation updateUnits($data: [updateUnitInput!]!) { updateUnits(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UnitModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteUnit(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUnit: boolean }>(`mutation deleteUnit($id: ID!) { deleteUnit(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteUnits(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUnits: boolean }>(`mutation deleteUnits($ids: [ID!]) { deleteUnits(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateCategory(variables: { data: CreateCategoryInput }, resultSelector: string | ((qb: CategoryModelSelector) => CategoryModelSelector) = categoryModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCategory: CategoryModelType}>(`mutation createCategory($data: createCategoryInput!) { createCategory(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateCategorys(variables: { data: CreateCategoryInput[] }, resultSelector: string | ((qb: CategoryModelSelector) => CategoryModelSelector) = categoryModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCategorys: CategoryModelType[]}>(`mutation createCategorys($data: [createCategoryInput!]!) { createCategorys(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCategory(variables: { id: string, data: UpdateCategorySchema }, resultSelector: string | ((qb: CategoryModelSelector) => CategoryModelSelector) = categoryModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCategory: CategoryModelType}>(`mutation updateCategory($id: ID!, $data: updateCategorySchema!) { updateCategory(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCategorys(variables: { data: UpdateCategoryInput[] }, resultSelector: string | ((qb: CategoryModelSelector) => CategoryModelSelector) = categoryModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCategorys: CategoryModelType[]}>(`mutation updateCategorys($data: [updateCategoryInput!]!) { updateCategorys(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteCategory(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCategory: boolean }>(`mutation deleteCategory($id: ID!) { deleteCategory(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteCategorys(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCategorys: boolean }>(`mutation deleteCategorys($ids: [ID!]) { deleteCategorys(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateProduct(variables: { data: CreateProductInput }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProduct: ProductModelType}>(`mutation createProduct($data: createProductInput!) { createProduct(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateProducts(variables: { data: CreateProductInput[] }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProducts: ProductModelType[]}>(`mutation createProducts($data: [createProductInput!]!) { createProducts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProduct(variables: { id: string, data: UpdateProductSchema }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProduct: ProductModelType}>(`mutation updateProduct($id: ID!, $data: updateProductSchema!) { updateProduct(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProducts(variables: { data: UpdateProductInput[] }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProducts: ProductModelType[]}>(`mutation updateProducts($data: [updateProductInput!]!) { updateProducts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteProduct(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProduct: boolean }>(`mutation deleteProduct($id: ID!) { deleteProduct(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteProducts(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProducts: boolean }>(`mutation deleteProducts($ids: [ID!]) { deleteProducts(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateVerify(variables: { data: CreateVerifyInput }, resultSelector: string | ((qb: VerifyModelSelector) => VerifyModelSelector) = verifyModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createVerify: VerifyModelType}>(`mutation createVerify($data: createVerifyInput!) { createVerify(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new VerifyModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateVerifys(variables: { data: CreateVerifyInput[] }, resultSelector: string | ((qb: VerifyModelSelector) => VerifyModelSelector) = verifyModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createVerifys: VerifyModelType[]}>(`mutation createVerifys($data: [createVerifyInput!]!) { createVerifys(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new VerifyModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateVerify(variables: { id: string, data: UpdateVerifySchema }, resultSelector: string | ((qb: VerifyModelSelector) => VerifyModelSelector) = verifyModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateVerify: VerifyModelType}>(`mutation updateVerify($id: ID!, $data: updateVerifySchema!) { updateVerify(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new VerifyModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateVerifys(variables: { data: UpdateVerifyInput[] }, resultSelector: string | ((qb: VerifyModelSelector) => VerifyModelSelector) = verifyModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateVerifys: VerifyModelType[]}>(`mutation updateVerifys($data: [updateVerifyInput!]!) { updateVerifys(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new VerifyModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteVerify(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteVerify: boolean }>(`mutation deleteVerify($id: ID!) { deleteVerify(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteVerifys(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteVerifys: boolean }>(`mutation deleteVerifys($ids: [ID!]) { deleteVerifys(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateFile(variables: { data: CreateFileInput }, resultSelector: string | ((qb: FileModelSelector) => FileModelSelector) = fileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createFile: FileModelType}>(`mutation createFile($data: createFileInput!) { createFile(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new FileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateFiles(variables: { data: CreateFileInput[] }, resultSelector: string | ((qb: FileModelSelector) => FileModelSelector) = fileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createFiles: FileModelType[]}>(`mutation createFiles($data: [createFileInput!]!) { createFiles(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new FileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFile(variables: { id: string, data: UpdateFileSchema }, resultSelector: string | ((qb: FileModelSelector) => FileModelSelector) = fileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFile: FileModelType}>(`mutation updateFile($id: ID!, $data: updateFileSchema!) { updateFile(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new FileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFiles(variables: { data: UpdateFileInput[] }, resultSelector: string | ((qb: FileModelSelector) => FileModelSelector) = fileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFiles: FileModelType[]}>(`mutation updateFiles($data: [updateFileInput!]!) { updateFiles(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new FileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteFile(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteFile: boolean }>(`mutation deleteFile($id: ID!) { deleteFile(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteFiles(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteFiles: boolean }>(`mutation deleteFiles($ids: [ID!]) { deleteFiles(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateLead(variables: { data: CreateLeadInput }, resultSelector: string | ((qb: LeadModelSelector) => LeadModelSelector) = leadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createLead: LeadModelType}>(`mutation createLead($data: createLeadInput!) { createLead(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateLeads(variables: { data: CreateLeadInput[] }, resultSelector: string | ((qb: LeadModelSelector) => LeadModelSelector) = leadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createLeads: LeadModelType[]}>(`mutation createLeads($data: [createLeadInput!]!) { createLeads(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLead(variables: { id: string, data: UpdateLeadSchema }, resultSelector: string | ((qb: LeadModelSelector) => LeadModelSelector) = leadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateLead: LeadModelType}>(`mutation updateLead($id: ID!, $data: updateLeadSchema!) { updateLead(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLeads(variables: { data: UpdateLeadInput[] }, resultSelector: string | ((qb: LeadModelSelector) => LeadModelSelector) = leadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateLeads: LeadModelType[]}>(`mutation updateLeads($data: [updateLeadInput!]!) { updateLeads(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteLead(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteLead: boolean }>(`mutation deleteLead($id: ID!) { deleteLead(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteLeads(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteLeads: boolean }>(`mutation deleteLeads($ids: [ID!]) { deleteLeads(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateLeadLine(variables: { data: CreateLeadLineInput }, resultSelector: string | ((qb: LeadLineModelSelector) => LeadLineModelSelector) = leadLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createLeadLine: LeadLineModelType}>(`mutation createLeadLine($data: createLeadLineInput!) { createLeadLine(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateLeadLines(variables: { data: CreateLeadLineInput[] }, resultSelector: string | ((qb: LeadLineModelSelector) => LeadLineModelSelector) = leadLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createLeadLines: LeadLineModelType[]}>(`mutation createLeadLines($data: [createLeadLineInput!]!) { createLeadLines(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLeadLine(variables: { id: string, data: UpdateLeadLineSchema }, resultSelector: string | ((qb: LeadLineModelSelector) => LeadLineModelSelector) = leadLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateLeadLine: LeadLineModelType}>(`mutation updateLeadLine($id: ID!, $data: updateLeadLineSchema!) { updateLeadLine(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLeadLines(variables: { data: UpdateLeadLineInput[] }, resultSelector: string | ((qb: LeadLineModelSelector) => LeadLineModelSelector) = leadLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateLeadLines: LeadLineModelType[]}>(`mutation updateLeadLines($data: [updateLeadLineInput!]!) { updateLeadLines(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteLeadLine(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteLeadLine: boolean }>(`mutation deleteLeadLine($id: ID!) { deleteLeadLine(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteLeadLines(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteLeadLines: boolean }>(`mutation deleteLeadLines($ids: [ID!]) { deleteLeadLines(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateQuote(variables: { data: CreateQuoteInput }, resultSelector: string | ((qb: QuoteModelSelector) => QuoteModelSelector) = quoteModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createQuote: QuoteModelType}>(`mutation createQuote($data: createQuoteInput!) { createQuote(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateQuotes(variables: { data: CreateQuoteInput[] }, resultSelector: string | ((qb: QuoteModelSelector) => QuoteModelSelector) = quoteModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createQuotes: QuoteModelType[]}>(`mutation createQuotes($data: [createQuoteInput!]!) { createQuotes(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateQuote(variables: { id: string, data: UpdateQuoteSchema }, resultSelector: string | ((qb: QuoteModelSelector) => QuoteModelSelector) = quoteModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateQuote: QuoteModelType}>(`mutation updateQuote($id: ID!, $data: updateQuoteSchema!) { updateQuote(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateQuotes(variables: { data: UpdateQuoteInput[] }, resultSelector: string | ((qb: QuoteModelSelector) => QuoteModelSelector) = quoteModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateQuotes: QuoteModelType[]}>(`mutation updateQuotes($data: [updateQuoteInput!]!) { updateQuotes(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteQuote(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteQuote: boolean }>(`mutation deleteQuote($id: ID!) { deleteQuote(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteQuotes(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteQuotes: boolean }>(`mutation deleteQuotes($ids: [ID!]) { deleteQuotes(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateQuoteLine(variables: { data: CreateQuoteLineInput }, resultSelector: string | ((qb: QuoteLineModelSelector) => QuoteLineModelSelector) = quoteLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createQuoteLine: QuoteLineModelType}>(`mutation createQuoteLine($data: createQuoteLineInput!) { createQuoteLine(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateQuoteLines(variables: { data: CreateQuoteLineInput[] }, resultSelector: string | ((qb: QuoteLineModelSelector) => QuoteLineModelSelector) = quoteLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createQuoteLines: QuoteLineModelType[]}>(`mutation createQuoteLines($data: [createQuoteLineInput!]!) { createQuoteLines(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateQuoteLine(variables: { id: string, data: UpdateQuoteLineSchema }, resultSelector: string | ((qb: QuoteLineModelSelector) => QuoteLineModelSelector) = quoteLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateQuoteLine: QuoteLineModelType}>(`mutation updateQuoteLine($id: ID!, $data: updateQuoteLineSchema!) { updateQuoteLine(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateQuoteLines(variables: { data: UpdateQuoteLineInput[] }, resultSelector: string | ((qb: QuoteLineModelSelector) => QuoteLineModelSelector) = quoteLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateQuoteLines: QuoteLineModelType[]}>(`mutation updateQuoteLines($data: [updateQuoteLineInput!]!) { updateQuoteLines(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QuoteLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteQuoteLine(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteQuoteLine: boolean }>(`mutation deleteQuoteLine($id: ID!) { deleteQuoteLine(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteQuoteLines(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteQuoteLines: boolean }>(`mutation deleteQuoteLines($ids: [ID!]) { deleteQuoteLines(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateOpportunity(variables: { data: CreateOpportunityInput }, resultSelector: string | ((qb: OpportunityModelSelector) => OpportunityModelSelector) = opportunityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOpportunity: OpportunityModelType}>(`mutation createOpportunity($data: createOpportunityInput!) { createOpportunity(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateOpportunitys(variables: { data: CreateOpportunityInput[] }, resultSelector: string | ((qb: OpportunityModelSelector) => OpportunityModelSelector) = opportunityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOpportunitys: OpportunityModelType[]}>(`mutation createOpportunitys($data: [createOpportunityInput!]!) { createOpportunitys(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOpportunity(variables: { id: string, data: UpdateOpportunitySchema }, resultSelector: string | ((qb: OpportunityModelSelector) => OpportunityModelSelector) = opportunityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOpportunity: OpportunityModelType}>(`mutation updateOpportunity($id: ID!, $data: updateOpportunitySchema!) { updateOpportunity(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOpportunitys(variables: { data: UpdateOpportunityInput[] }, resultSelector: string | ((qb: OpportunityModelSelector) => OpportunityModelSelector) = opportunityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOpportunitys: OpportunityModelType[]}>(`mutation updateOpportunitys($data: [updateOpportunityInput!]!) { updateOpportunitys(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOpportunity(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOpportunity: boolean }>(`mutation deleteOpportunity($id: ID!) { deleteOpportunity(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteOpportunitys(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOpportunitys: boolean }>(`mutation deleteOpportunitys($ids: [ID!]) { deleteOpportunitys(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateAccount(variables: { data: CreateAccountInput }, resultSelector: string | ((qb: AccountModelSelector) => AccountModelSelector) = accountModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAccount: AccountModelType}>(`mutation createAccount($data: createAccountInput!) { createAccount(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new AccountModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateAccounts(variables: { data: CreateAccountInput[] }, resultSelector: string | ((qb: AccountModelSelector) => AccountModelSelector) = accountModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAccounts: AccountModelType[]}>(`mutation createAccounts($data: [createAccountInput!]!) { createAccounts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new AccountModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAccount(variables: { id: string, data: UpdateAccountSchema }, resultSelector: string | ((qb: AccountModelSelector) => AccountModelSelector) = accountModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAccount: AccountModelType}>(`mutation updateAccount($id: ID!, $data: updateAccountSchema!) { updateAccount(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new AccountModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAccounts(variables: { data: UpdateAccountInput[] }, resultSelector: string | ((qb: AccountModelSelector) => AccountModelSelector) = accountModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAccounts: AccountModelType[]}>(`mutation updateAccounts($data: [updateAccountInput!]!) { updateAccounts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new AccountModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteAccount(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAccount: boolean }>(`mutation deleteAccount($id: ID!) { deleteAccount(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteAccounts(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAccounts: boolean }>(`mutation deleteAccounts($ids: [ID!]) { deleteAccounts(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateContact(variables: { data: CreateContactInput }, resultSelector: string | ((qb: ContactModelSelector) => ContactModelSelector) = contactModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createContact: ContactModelType}>(`mutation createContact($data: createContactInput!) { createContact(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ContactModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateContacts(variables: { data: CreateContactInput[] }, resultSelector: string | ((qb: ContactModelSelector) => ContactModelSelector) = contactModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createContacts: ContactModelType[]}>(`mutation createContacts($data: [createContactInput!]!) { createContacts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ContactModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateContact(variables: { id: string, data: UpdateContactSchema }, resultSelector: string | ((qb: ContactModelSelector) => ContactModelSelector) = contactModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateContact: ContactModelType}>(`mutation updateContact($id: ID!, $data: updateContactSchema!) { updateContact(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ContactModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateContacts(variables: { data: UpdateContactInput[] }, resultSelector: string | ((qb: ContactModelSelector) => ContactModelSelector) = contactModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateContacts: ContactModelType[]}>(`mutation updateContacts($data: [updateContactInput!]!) { updateContacts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ContactModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteContact(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteContact: boolean }>(`mutation deleteContact($id: ID!) { deleteContact(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteContacts(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteContacts: boolean }>(`mutation deleteContacts($ids: [ID!]) { deleteContacts(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateOrder(variables: { data: CreateOrderInput }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOrder: OrderModelType}>(`mutation createOrder($data: createOrderInput!) { createOrder(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateOrders(variables: { data: CreateOrderInput[] }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOrders: OrderModelType[]}>(`mutation createOrders($data: [createOrderInput!]!) { createOrders(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrder(variables: { id: string, data: UpdateOrderSchema }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrder: OrderModelType}>(`mutation updateOrder($id: ID!, $data: updateOrderSchema!) { updateOrder(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrders(variables: { data: UpdateOrderInput[] }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrders: OrderModelType[]}>(`mutation updateOrders($data: [updateOrderInput!]!) { updateOrders(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOrder(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrder: boolean }>(`mutation deleteOrder($id: ID!) { deleteOrder(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteOrders(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrders: boolean }>(`mutation deleteOrders($ids: [ID!]) { deleteOrders(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateOrderLine(variables: { data: CreateOrderLineInput }, resultSelector: string | ((qb: OrderLineModelSelector) => OrderLineModelSelector) = orderLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOrderLine: OrderLineModelType}>(`mutation createOrderLine($data: createOrderLineInput!) { createOrderLine(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateOrderLines(variables: { data: CreateOrderLineInput[] }, resultSelector: string | ((qb: OrderLineModelSelector) => OrderLineModelSelector) = orderLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOrderLines: OrderLineModelType[]}>(`mutation createOrderLines($data: [createOrderLineInput!]!) { createOrderLines(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrderLine(variables: { id: string, data: UpdateOrderLineSchema }, resultSelector: string | ((qb: OrderLineModelSelector) => OrderLineModelSelector) = orderLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrderLine: OrderLineModelType}>(`mutation updateOrderLine($id: ID!, $data: updateOrderLineSchema!) { updateOrderLine(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrderLines(variables: { data: UpdateOrderLineInput[] }, resultSelector: string | ((qb: OrderLineModelSelector) => OrderLineModelSelector) = orderLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrderLines: OrderLineModelType[]}>(`mutation updateOrderLines($data: [updateOrderLineInput!]!) { updateOrderLines(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOrderLine(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrderLine: boolean }>(`mutation deleteOrderLine($id: ID!) { deleteOrderLine(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteOrderLines(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrderLines: boolean }>(`mutation deleteOrderLines($ids: [ID!]) { deleteOrderLines(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateCertification(variables: { data: CreateCertificationInput }, resultSelector: string | ((qb: CertificationModelSelector) => CertificationModelSelector) = certificationModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCertification: CertificationModelType}>(`mutation createCertification($data: createCertificationInput!) { createCertification(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CertificationModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateCertifications(variables: { data: CreateCertificationInput[] }, resultSelector: string | ((qb: CertificationModelSelector) => CertificationModelSelector) = certificationModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCertifications: CertificationModelType[]}>(`mutation createCertifications($data: [createCertificationInput!]!) { createCertifications(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CertificationModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCertification(variables: { id: string, data: UpdateCertificationSchema }, resultSelector: string | ((qb: CertificationModelSelector) => CertificationModelSelector) = certificationModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCertification: CertificationModelType}>(`mutation updateCertification($id: ID!, $data: updateCertificationSchema!) { updateCertification(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CertificationModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCertifications(variables: { data: UpdateCertificationInput[] }, resultSelector: string | ((qb: CertificationModelSelector) => CertificationModelSelector) = certificationModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCertifications: CertificationModelType[]}>(`mutation updateCertifications($data: [updateCertificationInput!]!) { updateCertifications(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CertificationModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteCertification(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCertification: boolean }>(`mutation deleteCertification($id: ID!) { deleteCertification(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteCertifications(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCertifications: boolean }>(`mutation deleteCertifications($ids: [ID!]) { deleteCertifications(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateAdvisory(variables: { data: CreateAdvisoryInput }, resultSelector: string | ((qb: AdvisoryModelSelector) => AdvisoryModelSelector) = advisoryModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAdvisory: AdvisoryModelType}>(`mutation createAdvisory($data: createAdvisoryInput!) { createAdvisory(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new AdvisoryModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateAdvisorys(variables: { data: CreateAdvisoryInput[] }, resultSelector: string | ((qb: AdvisoryModelSelector) => AdvisoryModelSelector) = advisoryModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAdvisorys: AdvisoryModelType[]}>(`mutation createAdvisorys($data: [createAdvisoryInput!]!) { createAdvisorys(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new AdvisoryModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAdvisory(variables: { id: string, data: UpdateAdvisorySchema }, resultSelector: string | ((qb: AdvisoryModelSelector) => AdvisoryModelSelector) = advisoryModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAdvisory: AdvisoryModelType}>(`mutation updateAdvisory($id: ID!, $data: updateAdvisorySchema!) { updateAdvisory(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new AdvisoryModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAdvisorys(variables: { data: UpdateAdvisoryInput[] }, resultSelector: string | ((qb: AdvisoryModelSelector) => AdvisoryModelSelector) = advisoryModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAdvisorys: AdvisoryModelType[]}>(`mutation updateAdvisorys($data: [updateAdvisoryInput!]!) { updateAdvisorys(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new AdvisoryModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteAdvisory(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAdvisory: boolean }>(`mutation deleteAdvisory($id: ID!) { deleteAdvisory(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteAdvisorys(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAdvisorys: boolean }>(`mutation deleteAdvisorys($ids: [ID!]) { deleteAdvisorys(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateQGrade(variables: { data: CreateQGradeInput }, resultSelector: string | ((qb: QGradeModelSelector) => QGradeModelSelector) = qGradeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createQGrade: QGradeModelType}>(`mutation createQGrade($data: createQGradeInput!) { createQGrade(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QGradeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateQGrades(variables: { data: CreateQGradeInput[] }, resultSelector: string | ((qb: QGradeModelSelector) => QGradeModelSelector) = qGradeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createQGrades: QGradeModelType[]}>(`mutation createQGrades($data: [createQGradeInput!]!) { createQGrades(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QGradeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateQGrade(variables: { id: string, data: UpdateQGradeSchema }, resultSelector: string | ((qb: QGradeModelSelector) => QGradeModelSelector) = qGradeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateQGrade: QGradeModelType}>(`mutation updateQGrade($id: ID!, $data: updateQGradeSchema!) { updateQGrade(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QGradeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateQGrades(variables: { data: UpdateQGradeInput[] }, resultSelector: string | ((qb: QGradeModelSelector) => QGradeModelSelector) = qGradeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateQGrades: QGradeModelType[]}>(`mutation updateQGrades($data: [updateQGradeInput!]!) { updateQGrades(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new QGradeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteQGrade(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteQGrade: boolean }>(`mutation deleteQGrade($id: ID!) { deleteQGrade(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteQGrades(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteQGrades: boolean }>(`mutation deleteQGrades($ids: [ID!]) { deleteQGrades(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateCart(variables: { data: CreateCartInput }, resultSelector: string | ((qb: CartModelSelector) => CartModelSelector) = cartModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCart: CartModelType}>(`mutation createCart($data: createCartInput!) { createCart(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CartModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateCarts(variables: { data: CreateCartInput[] }, resultSelector: string | ((qb: CartModelSelector) => CartModelSelector) = cartModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCarts: CartModelType[]}>(`mutation createCarts($data: [createCartInput!]!) { createCarts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CartModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCart(variables: { id: string, data: UpdateCartSchema }, resultSelector: string | ((qb: CartModelSelector) => CartModelSelector) = cartModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCart: CartModelType}>(`mutation updateCart($id: ID!, $data: updateCartSchema!) { updateCart(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CartModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCarts(variables: { data: UpdateCartInput[] }, resultSelector: string | ((qb: CartModelSelector) => CartModelSelector) = cartModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCarts: CartModelType[]}>(`mutation updateCarts($data: [updateCartInput!]!) { updateCarts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CartModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteCart(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCart: boolean }>(`mutation deleteCart($id: ID!) { deleteCart(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteCarts(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCarts: boolean }>(`mutation deleteCarts($ids: [ID!]) { deleteCarts(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateProductAttribute(variables: { data: CreateProductAttributeInput }, resultSelector: string | ((qb: ProductAttributeModelSelector) => ProductAttributeModelSelector) = productAttributeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProductAttribute: ProductAttributeModelType}>(`mutation createProductAttribute($data: createProductAttributeInput!) { createProductAttribute(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductAttributeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateProductAttributes(variables: { data: CreateProductAttributeInput[] }, resultSelector: string | ((qb: ProductAttributeModelSelector) => ProductAttributeModelSelector) = productAttributeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProductAttributes: ProductAttributeModelType[]}>(`mutation createProductAttributes($data: [createProductAttributeInput!]!) { createProductAttributes(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductAttributeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProductAttribute(variables: { id: string, data: UpdateProductAttributeSchema }, resultSelector: string | ((qb: ProductAttributeModelSelector) => ProductAttributeModelSelector) = productAttributeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProductAttribute: ProductAttributeModelType}>(`mutation updateProductAttribute($id: ID!, $data: updateProductAttributeSchema!) { updateProductAttribute(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductAttributeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProductAttributes(variables: { data: UpdateProductAttributeInput[] }, resultSelector: string | ((qb: ProductAttributeModelSelector) => ProductAttributeModelSelector) = productAttributeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProductAttributes: ProductAttributeModelType[]}>(`mutation updateProductAttributes($data: [updateProductAttributeInput!]!) { updateProductAttributes(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductAttributeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteProductAttribute(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProductAttribute: boolean }>(`mutation deleteProductAttribute($id: ID!) { deleteProductAttribute(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteProductAttributes(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProductAttributes: boolean }>(`mutation deleteProductAttributes($ids: [ID!]) { deleteProductAttributes(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateOpportunityLine(variables: { data: CreateOpportunityLineInput }, resultSelector: string | ((qb: OpportunityLineModelSelector) => OpportunityLineModelSelector) = opportunityLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOpportunityLine: OpportunityLineModelType}>(`mutation createOpportunityLine($data: createOpportunityLineInput!) { createOpportunityLine(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateOpportunityLines(variables: { data: CreateOpportunityLineInput[] }, resultSelector: string | ((qb: OpportunityLineModelSelector) => OpportunityLineModelSelector) = opportunityLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOpportunityLines: OpportunityLineModelType[]}>(`mutation createOpportunityLines($data: [createOpportunityLineInput!]!) { createOpportunityLines(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOpportunityLine(variables: { id: string, data: UpdateOpportunityLineSchema }, resultSelector: string | ((qb: OpportunityLineModelSelector) => OpportunityLineModelSelector) = opportunityLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOpportunityLine: OpportunityLineModelType}>(`mutation updateOpportunityLine($id: ID!, $data: updateOpportunityLineSchema!) { updateOpportunityLine(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOpportunityLines(variables: { data: UpdateOpportunityLineInput[] }, resultSelector: string | ((qb: OpportunityLineModelSelector) => OpportunityLineModelSelector) = opportunityLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOpportunityLines: OpportunityLineModelType[]}>(`mutation updateOpportunityLines($data: [updateOpportunityLineInput!]!) { updateOpportunityLines(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OpportunityLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOpportunityLine(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOpportunityLine: boolean }>(`mutation deleteOpportunityLine($id: ID!) { deleteOpportunityLine(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteOpportunityLines(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOpportunityLines: boolean }>(`mutation deleteOpportunityLines($ids: [ID!]) { deleteOpportunityLines(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateRecord(variables: { data: CreateRecordInput }, resultSelector: string | ((qb: RecordModelSelector) => RecordModelSelector) = recordModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createRecord: RecordModelType}>(`mutation createRecord($data: createRecordInput!) { createRecord(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new RecordModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateRecords(variables: { data: CreateRecordInput[] }, resultSelector: string | ((qb: RecordModelSelector) => RecordModelSelector) = recordModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createRecords: RecordModelType[]}>(`mutation createRecords($data: [createRecordInput!]!) { createRecords(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new RecordModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateRecord(variables: { id: string, data: UpdateRecordSchema }, resultSelector: string | ((qb: RecordModelSelector) => RecordModelSelector) = recordModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateRecord: RecordModelType}>(`mutation updateRecord($id: ID!, $data: updateRecordSchema!) { updateRecord(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new RecordModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateRecords(variables: { data: UpdateRecordInput[] }, resultSelector: string | ((qb: RecordModelSelector) => RecordModelSelector) = recordModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateRecords: RecordModelType[]}>(`mutation updateRecords($data: [updateRecordInput!]!) { updateRecords(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new RecordModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteRecord(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteRecord: boolean }>(`mutation deleteRecord($id: ID!) { deleteRecord(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteRecords(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteRecords: boolean }>(`mutation deleteRecords($ids: [ID!]) { deleteRecords(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateProductRequest(variables: { data: CreateProductRequestInput }, resultSelector: string | ((qb: ProductRequestModelSelector) => ProductRequestModelSelector) = productRequestModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProductRequest: ProductRequestModelType}>(`mutation createProductRequest($data: createProductRequestInput!) { createProductRequest(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductRequestModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateProductRequests(variables: { data: CreateProductRequestInput[] }, resultSelector: string | ((qb: ProductRequestModelSelector) => ProductRequestModelSelector) = productRequestModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProductRequests: ProductRequestModelType[]}>(`mutation createProductRequests($data: [createProductRequestInput!]!) { createProductRequests(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductRequestModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProductRequest(variables: { id: string, data: UpdateProductRequestSchema }, resultSelector: string | ((qb: ProductRequestModelSelector) => ProductRequestModelSelector) = productRequestModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProductRequest: ProductRequestModelType}>(`mutation updateProductRequest($id: ID!, $data: updateProductRequestSchema!) { updateProductRequest(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductRequestModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProductRequests(variables: { data: UpdateProductRequestInput[] }, resultSelector: string | ((qb: ProductRequestModelSelector) => ProductRequestModelSelector) = productRequestModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProductRequests: ProductRequestModelType[]}>(`mutation updateProductRequests($data: [updateProductRequestInput!]!) { updateProductRequests(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductRequestModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteProductRequest(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProductRequest: boolean }>(`mutation deleteProductRequest($id: ID!) { deleteProductRequest(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteProductRequests(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProductRequests: boolean }>(`mutation deleteProductRequests($ids: [ID!]) { deleteProductRequests(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateLayout(variables: { data: CreateLayoutInput }, resultSelector: string | ((qb: LayoutModelSelector) => LayoutModelSelector) = layoutModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createLayout: LayoutModelType}>(`mutation createLayout($data: createLayoutInput!) { createLayout(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LayoutModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateLayouts(variables: { data: CreateLayoutInput[] }, resultSelector: string | ((qb: LayoutModelSelector) => LayoutModelSelector) = layoutModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createLayouts: LayoutModelType[]}>(`mutation createLayouts($data: [createLayoutInput!]!) { createLayouts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LayoutModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLayout(variables: { id: string, data: UpdateLayoutSchema }, resultSelector: string | ((qb: LayoutModelSelector) => LayoutModelSelector) = layoutModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateLayout: LayoutModelType}>(`mutation updateLayout($id: ID!, $data: updateLayoutSchema!) { updateLayout(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LayoutModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLayouts(variables: { data: UpdateLayoutInput[] }, resultSelector: string | ((qb: LayoutModelSelector) => LayoutModelSelector) = layoutModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateLayouts: LayoutModelType[]}>(`mutation updateLayouts($data: [updateLayoutInput!]!) { updateLayouts(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LayoutModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteLayout(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteLayout: boolean }>(`mutation deleteLayout($id: ID!) { deleteLayout(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteLayouts(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteLayouts: boolean }>(`mutation deleteLayouts($ids: [ID!]) { deleteLayouts(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateComponent(variables: { data: CreateComponentInput }, resultSelector: string | ((qb: ComponentModelSelector) => ComponentModelSelector) = componentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createComponent: ComponentModelType}>(`mutation createComponent($data: createComponentInput!) { createComponent(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ComponentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateComponents(variables: { data: CreateComponentInput[] }, resultSelector: string | ((qb: ComponentModelSelector) => ComponentModelSelector) = componentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createComponents: ComponentModelType[]}>(`mutation createComponents($data: [createComponentInput!]!) { createComponents(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ComponentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateComponent(variables: { id: string, data: UpdateComponentSchema }, resultSelector: string | ((qb: ComponentModelSelector) => ComponentModelSelector) = componentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateComponent: ComponentModelType}>(`mutation updateComponent($id: ID!, $data: updateComponentSchema!) { updateComponent(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ComponentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateComponents(variables: { data: UpdateComponentInput[] }, resultSelector: string | ((qb: ComponentModelSelector) => ComponentModelSelector) = componentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateComponents: ComponentModelType[]}>(`mutation updateComponents($data: [updateComponentInput!]!) { updateComponents(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ComponentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteComponent(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteComponent: boolean }>(`mutation deleteComponent($id: ID!) { deleteComponent(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteComponents(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteComponents: boolean }>(`mutation deleteComponents($ids: [ID!]) { deleteComponents(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreateInsurance(variables: { data: CreateInsuranceInput }, resultSelector: string | ((qb: InsuranceModelSelector) => InsuranceModelSelector) = insuranceModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createInsurance: InsuranceModelType}>(`mutation createInsurance($data: createInsuranceInput!) { createInsurance(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new InsuranceModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateInsurances(variables: { data: CreateInsuranceInput[] }, resultSelector: string | ((qb: InsuranceModelSelector) => InsuranceModelSelector) = insuranceModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createInsurances: InsuranceModelType[]}>(`mutation createInsurances($data: [createInsuranceInput!]!) { createInsurances(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new InsuranceModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateInsurance(variables: { id: string, data: UpdateInsuranceSchema }, resultSelector: string | ((qb: InsuranceModelSelector) => InsuranceModelSelector) = insuranceModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateInsurance: InsuranceModelType}>(`mutation updateInsurance($id: ID!, $data: updateInsuranceSchema!) { updateInsurance(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new InsuranceModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateInsurances(variables: { data: UpdateInsuranceInput[] }, resultSelector: string | ((qb: InsuranceModelSelector) => InsuranceModelSelector) = insuranceModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateInsurances: InsuranceModelType[]}>(`mutation updateInsurances($data: [updateInsuranceInput!]!) { updateInsurances(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new InsuranceModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteInsurance(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteInsurance: boolean }>(`mutation deleteInsurance($id: ID!) { deleteInsurance(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeleteInsurances(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deleteInsurances: boolean }>(`mutation deleteInsurances($ids: [ID!]) { deleteInsurances(ids: $ids) }`, variables, optimisticUpdate)
    },
    mutateCreatePayment(variables: { data: CreatePaymentInput }, resultSelector: string | ((qb: PaymentModelSelector) => PaymentModelSelector) = paymentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createPayment: PaymentModelType}>(`mutation createPayment($data: createPaymentInput!) { createPayment(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreatePayments(variables: { data: CreatePaymentInput[] }, resultSelector: string | ((qb: PaymentModelSelector) => PaymentModelSelector) = paymentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createPayments: PaymentModelType[]}>(`mutation createPayments($data: [createPaymentInput!]!) { createPayments(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePayment(variables: { id: string, data: UpdatePaymentSchema }, resultSelector: string | ((qb: PaymentModelSelector) => PaymentModelSelector) = paymentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePayment: PaymentModelType}>(`mutation updatePayment($id: ID!, $data: updatePaymentSchema!) { updatePayment(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePayments(variables: { data: UpdatePaymentInput[] }, resultSelector: string | ((qb: PaymentModelSelector) => PaymentModelSelector) = paymentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePayments: PaymentModelType[]}>(`mutation updatePayments($data: [updatePaymentInput!]!) { updatePayments(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeletePayment(variables: { id: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ deletePayment: boolean }>(`mutation deletePayment($id: ID!) { deletePayment(id: $id) }`, variables, optimisticUpdate)
    },
    mutateDeletePayments(variables: { ids?: string[] }, optimisticUpdate?: () => void) {
      return self.mutate<{ deletePayments: boolean }>(`mutation deletePayments($ids: [ID!]) { deletePayments(ids: $ids) }`, variables, optimisticUpdate)
    },
  })))
