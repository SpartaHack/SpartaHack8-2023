import { CustomDropdown } from "@/helpers/custom-dropdown";
import CustomModal from "@/helpers/custom-modal";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getUserSpaceResponse } from "../../types";
import { convertSpace } from "./convert-space";

export const menuDropDown = (
  contentID: string,
  contentURL: string,
  spaceId: string,
  handleDelete: (contentId: string) => void,
  handleCopy: (contentId: string, spaceId?: string) => void,
  spaces: getUserSpaceResponse[],
) => [
  {
    label: "Section 1",
    items: [
      {
        label: (
          <CustomDropdown
            offset={26}
            placement="left"
            title={
              <div className="flex flex-row w-full cursor-pointer items-center">
                <Icon
                  icon="material-symbols:text-select-move-down-rounded"
                  className="h-6 w-6"
                />
                <span className="ml-6 mt-0.6">Move to space</span>
              </div>
            }
            sections={convertSpace(spaces, contentURL)}
          />
        ),
      },
    ],
  },
  {
    label: "Section 1",
    items: [
      {
        label: (
          <div className="flex flex-row w-full cursor-pointer items-center">
            <Icon icon="ph:link-bold" className="h-6 w-6" />
            <span className="ml-6 mt-0.6">Copy link</span>
          </div>
        ),
        clickEvent: () => handleCopy(contentID, spaceId),
      },
    ],
  },
  {
    label: "Section 2",
    items: [
      {
        label: (
          <CustomModal
            title={
              <div className="flex flex-row w-full cursor-pointer items-center">
                <Icon icon="gg:trash" className="h-6 w-6" />
                <span className="ml-6 mt-0.6">Delete</span>
              </div>
            }
            btnStyling1="bg-white text-black border dark:border-black dark:bg-black dark:text-white"
            btnStyling2="bg-danger text-white border dark:border-danger dark:bg-danger dark:text-white"
            contentMain={
              <div className="mb-5">
                Are you sure you want to delete this content?
              </div>
            }
            actionTitle="Delete"
            actionEvent={() => handleDelete(contentID)}
            footer
          />
        ),
      },
    ],
  },
];
