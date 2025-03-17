export interface IUserProfile {
  id: string
  email: string
  fullName: string
  firstName: string
  lastName: string
  phoneNumber: string
  role: string[]
  fullLocation: string
  avatarUrl: string
  description: string
  balance: number
  subscriptionPlan: number
  subscriptionExpiryDate: string
  educationHistory: string[]
  majorCategory: string
  majorIndustry: string
}
