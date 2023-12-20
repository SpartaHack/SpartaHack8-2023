import { AxiosError } from "axios";
import React, { ChangeEvent, MouseEventHandler, ReactNode } from "react";
import { YouTubeProps } from "react-youtube";

export type CustomButtonProps = {
  title: string | JSX.Element;
  size?: "sm" | "md" | "lg" | undefined;
  btnType: "button" | "submit" | "reset" | undefined;
  clickEvent?: MouseEventHandler | (() => void);
  btnStyling?: string;
  popOver?: boolean;
  popOverClickEvent?: () => void;
  popOverTitle?: string;
  popOverStyling?: string;
};

export type AccountProps = {
  name: string;
  description?: string;
  picture?: string;
};

export type CustomDropdownProps = {
  title: JSX.Element;
  sections: {
    label: string;
    items: {
      label: string | JSX.Element;
      clickEvent?: () => void;
      dropStyling?: string;
    }[];
  }[];
  placement?: "top" | "bottom" | "left" | "right";
  offset?: number;
  closeOnSelect?: boolean;
};

export type CustomModalProps = {
  title: JSX.Element;
  size?:
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full";
  btnStyling1?: string;
  btnStyling2?: string;
  contentTitle?: string;
  contentMain: ReactNode | JSX.Element;
  actionTitle?: string;
  actionEvent?: MouseEventHandler;
  placement?:
  | "center"
  | "auto"
  | "top"
  | "top-center"
  | "bottom"
  | "bottom-center"
  | undefined;
  footer: boolean;
};

export type CustomTextInputProps = {
  value: string | readonly string[] | undefined;
  type: string;
  label: string;
  isInvalid?: boolean;
  eventChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  styling?: string | undefined;
};

export type CustomTextAreaProps = {
  value: string | readonly string[] | undefined;
  type: string;
  label: string;
  isInvalid?: boolean;
  eventChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  styling?: string | undefined;
  description: string;
};

export type ChatSubmitProps = {
  onMessageSubmit: (message: string) => void;
  isLoading: boolean;
};

export type ContentCardProps = {
  contentAdd?: boolean;
  type: string;
  contentID: string;
  contentURL?: string;
  title: string;
  spaceId?: string;
  thumbnail_url: string;
};

export type Features = {
  icon: JSX.Element;
  label: string;
};

export type PriceCardProps = {
  plan: string;
  price: JSX.Element | string;
  subTitle: string;
  planBenefits: Features[];
  buttonStyle?: string;
  buttonText: string | JSX.Element;
  handleClick?: () => void;
};

export type DashboardProps = {
  userId: string;
  spaceIds: string[];
  tier: string;
};

export type useContainerHeightProps = {
  type: string;
};

export type MessageType = {
  sources?: string[] | undefined;
  type: string;
  response: string;
};

export type MessageProps = {
  message: MessageType;
  index: number;
  copiedState: Record<number, boolean>;
  copyToClipboard: (response: string, index: number) => void;
};

export type CustomAutocompleteProps = {
  style?: string;
  datas: { value: string }[];
  isInvalid: boolean;
  label: string;
  onValueChange: (value: string) => void;
  size: "sm" | "md" | "lg" | undefined;
  initValue?: string;
};

export type ResponseProps = {
  message: string;
  source?: undefined | string[];
};

export type TooltipContentProps = {
  source: ResponseProps["source"];
  children?: ReactNode;
};

export type PlayerProps = YouTubeProps & {
  seekTo: (seconds: number) => void;
};

export type YouLearnLogoProps = {
  size: "sm" | "lg";
  tier?: string;
  height?: number;
  width?: number;
};

export type ImageUploadProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  src: string;
};

export type EditAccordionProps = {
  indicator?: JSX.Element;
  title: JSX.Element | string;
  style?: string;
  photo: string;
};

export type CustomAccordionProps = {
  accordionData: {
    title: JSX.Element | string;
    content: JSX.Element | string;
    subtitle: JSX.Element | string;
  }[];
};

export type SignUpFormProps = {
  name: string;
  educationLevel: string;
};

export type TabContentProps = {
  price: string;
};

export type User = {
  _id: string;
  email: string;
  full_name: string;
  created_at: string;
};

export type UserProfile = {
  _id: string;
  user_id: string;
  education_level: string;
  last_login: string;
  streak: number;
  content_added: number;
  photo_url: string;
};

export type Subscription = {
  _id: string;
  user_id: string;
  customer_id: string;
  status: string;
  tier: string;
  created_at: string;
  current_period_end: string;
  renewal_date: string;
  amount_paid: number;
};

export type APIResponse = {
  user: User;
  user_profile: UserProfile;
  subscription: Subscription;
};

export type userProps = {
  userId: string | undefined;
  userData: APIResponse | undefined;
  setUserId: (userId: string | undefined) => void;
  setUserData: (data: APIResponse | undefined) => void;
};

export type UserState = {
  userId: string | undefined;
  userData: APIResponse | undefined;
  setUserId: (userId: string | undefined) => void;
  setUserData: (data: APIResponse | undefined) => void;
  updateUserData: (updatedData: Partial<UserProfile & Subscription>) => void;
  logout: () => void;
};

export type getUserSpaceResponse = {
  _id: string;
  space_name: string;
  visibility: "public" | "private";
};

export type SpaceStore = {
  spaces: getUserSpaceResponse[];
  setSpaces: (spaces: getUserSpaceResponse[]) => void;
  addSpaceToState: (space: getUserSpaceResponse) => void;
  deleteSpaceFromState: (id: string) => void;
  updateSpaceData: (updatedData: Partial<getUserSpaceResponse>) => void;
  logout: () => void;
};

export type SpaceResponse = {
  _id: string;
  space_name: string;
  visibility: "public" | "private";
};

export type Generations = {
  summary: string;
  questions: string[];
};

export type Metadata = {
  type: string;
  title: string;
  description: string;
  author: string;
  length: number;
  content_id: string;
  content_url: string;
  publish_date: string;
  thumbnail_url: string;
  source: number;
  text: string;
  path: string;
  keywords: string[];
  chunks: number;
};

export type Content = {
  _id: string;
  user_id: string;
  type: string;
  title: string;
  thumbnail_url: string;
  content_id: string;
  searches: number;
  generations: Generations;
  keywords: string[];
  author: string;
  visibility: string;
  metadata: Metadata;
  created_at: string;
};

export type Space = {
  _id: string;
  space_name: string;
  visibility: string;
};

export type AccessControl = {
  _id: string;
  space_id: string;
  user_id: string;
  role: string;
  created_at: string;
};

export type SpaceContentResponse = {
  space: Space;
  contents: Content[];
  access_control: AccessControl[];
};

export type History = {
  _id: string;
  user_id: string;
  content_id: string;
  space_id: string;
  created_at: string;
  content: Content;
  space: Space;
};

export type HistoryResponse = History[];

export type ContentStore = {
  contents: Content[] | SpaceContentResponse | any;
  setContents: (contents: Content[] | SpaceContentResponse | any) => void;
  addContent: (content: Content) => void;
  deleteContentFromState: (id: string) => void;
  updateContent: (updatedContent: Partial<Content>) => void;
  logout: () => void;
};

export type ChatQuestionProps = {
  questions: string[];
  chatQuestionClick: (question: string) => void;
  loading: boolean;
};

export type LearnContent = {
  space_id?: string;
  source?: string;
  chatLog?: MessageType[];
};

export type LearnStore = {
  chatLog: MessageType[];
  learnContent: (LearnContent & Content) | undefined;
  setLearnContent: (content: (LearnContent & Content) | undefined) => void;
  updateLearnContent: (
    updatedContent: Partial<
      LearnContent & Content & { chatLog: MessageType[]; source?: string }
    >,
  ) => void;
  clearContent: () => void;
};

export type NotificationProps = {
  id: string;
  message: string;
};

export type SpaceBoardProps = {
  spaceId: string;
};

export type ResultBoardProps = {
  query: string;
};

export type SearchType = {
  content_id: string;
  title: string;
  content_type: string;
  thumbnail_url: string;
  content_url: string;
};

export type OrderSummaryProps = {
  type: string;
};

export type SpaceIconProps = {
  height?: number;
  width?: number;
  clickEvent: () => void;
};

export type LoadingProps = {
  styling?: string;
  size?: "sm" | "md" | "lg" | undefined;
};

export type ErrorStoreProps = {
  error: AxiosError | undefined;
  setError: (error: AxiosError | undefined) => void;
};

export type PopUpProps = {
  title: string | number;
  description: string;
  isOpen: boolean;
  closeModal: () => void;
  titleStyles?: string;
  buttonTitle?: string;
  buttonClick?: MouseEventHandler<HTMLButtonElement>;
};