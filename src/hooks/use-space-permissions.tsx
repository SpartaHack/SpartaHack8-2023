import { auth } from "../../db/firebase";
import { AccessControl } from "../../types";

function getRoleForUserId(
  accessData: AccessControl[],
  userId: string,
): string | null {
  if (accessData) {
    for (const entry of accessData) {
      if (entry.user.id === userId) {
        return entry.role;
      }
    }
  }
  return null;
}

const useSpacePermission = (contents: any) => {
  const accessData: AccessControl[] = contents && contents.access_control;
  const userId = auth.currentUser?.uid!;
  const result = getRoleForUserId(accessData!, userId!);
  return result;
};

export default useSpacePermission;
