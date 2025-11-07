export interface Job {
  name: string;
  job_title: string;
  designation: string;
  salary: string;
  valid_till: string;
  small_description: string;
  keywords: string;
  posted_on: string; 
  company: string;
  department: string;
  seo_title: string;
  planned_vacancies: number;
  vacancies?: number;
  route: string;
  description: string; 
  skills: string;
  image?: string; 
  title: string;
  currency: string;
  lower_range: number;
  upper_range: number;
  salary_per: string; 
  publish_salary_range: number;
  location:string;
  employment_type:string;
  closes_on?:string
}