import { Category } from './category'
import { Industry } from './industry'
import { Ward } from './ward'

export interface JobPost {
  id: string
  userId: string
  ownerAvatarUrl: string
  ownerName: string
  title: string
  description: string
  responsibilities: string
  fee: number
  startDate: string
  dueDate: string
  assignedTo: string
  isOwnerCompleted: boolean
  isAssigneeCompleted: boolean
  category: Category
  industry: Industry
  ward: Ward
  createdAt: string
  modifiedAt: string
}
