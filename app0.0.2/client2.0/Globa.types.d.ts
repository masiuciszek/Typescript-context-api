interface Link {
  name: string
  path: string
}

type FnVoid = () => void
type Role = "USER" | "ADMIN"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  role: ROLE
}

type Status =
  | "LOADING"
  | "PENDING"
  | "RESOLVED"
  | "REJECTED"
  | "NATURAL"
  | "EMPTY"

interface LoginFormData {
  email: string
  password: string
}
interface RegisterFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

type Rating = "one" | "two" | "three" | "four" | "five"

interface Review {
  rating: number
  _id: string
  text: string
  author: User
}

interface Store {
  rating: Rating
  tags: string[]
  _id: string
  name: string
  address: string
  photo: string
  desc: string
  author: User
  slug: string
  __v: 0
  id: string
  reviews?: Review[]
}

type FormDataType = RegisterFormData | LoginFormData
