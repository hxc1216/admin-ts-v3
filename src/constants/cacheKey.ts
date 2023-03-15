const SYSTEM_NAME = 'admin-ts-v3'

class CacheKey {
  static TOKEN = `${SYSTEM_NAME}-token-key`
  static ACTIVE_THEME_NAME = `${SYSTEM_NAME}-active-theme-name-key`
  static SIDEBAR_STATUS = `${SYSTEM_NAME}-sidebar-status-key`
}

export default CacheKey
