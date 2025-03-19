import { Category } from './category'
import { Industry } from './industry'
import { Ward } from './ward'

export interface IUserProfile {
  id: string
  email: string
  fullName: string
  firstName: string
  lastName: string
  phoneNumber: string
  role: string[]
  ward: Ward
  avatarUrl: string
  description: string
  balance: number
  currentSubscription: number
  subscriptionExpiryDate: string
  educationHistory: string[]
  majorCategory: Category
  majorIndustry: Industry
  isLocked: boolean
}

export interface ILockUnlockUserAccountRequest {
  userId: string
  reason?: string
}
