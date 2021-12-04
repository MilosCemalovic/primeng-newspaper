import { MenuItem } from 'primeng/api'

export class MenuItemUtil {
  /** Translate MenuItem label by MenuItem id */
  public static findAction(actions: MenuItem[], actionId: string) {
    for (const action of actions) {

      if (action.id === actionId) {
        return action
      }

      if (action.items?.length > 0) {

        const foundAction = MenuItemUtil.findAction(action.items, actionId)

        if (foundAction) {
          return foundAction
        }
      }
    }

    return null
  }
}
