import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Jop } from '../interfaces/Jop';

@Injectable({
  providedIn: 'root'
})
export class JopsService {

  private apiUrl = 'https://api-next.jobsglobal.com:54902/api/v1/jobs/all'; // ?pagination_type=paginate&per_page=11

  res = {
    "data": [
        {
            "id": "3f35c8e5-3a5b-475c-af4d-68c52c6d4946",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/e32/063068-WhatsApp-Image-2024-01-18-at-18-24-51-jpeg.jpeg",
            "minimum_years_of_experience": 2,
            "title": "Houskeeping Supervisor",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 2,
            "incremental_id": 1,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"0e65afa022e158ce455a\",\"incremental_id\":null,\"job_title\":\"Houskeeping Supervisor\",\"job_title_lower\":\"houskeeping supervisor\",\"job_group_id\":\"8e65afa01b8b546c7e68\",\"job_group_name\":\"Urgently required for the leading Hospitality in KSA (Makkah)\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"063068-WhatsApp-Image-2024-01-18-at-18-24-51-jpeg.jpeg\",\"created_by_user_id\":\"27650148eb95aab058e8\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"2\",\"yr_exp\":2,\"country_location\":[],\"country_source\":[],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-01-23 11:16:50\",\"date_created\":\"2024-01-23 11:16:50\",\"day_time\":[[]],\"tag\":[\"Houskeeping Supervisor\"],\"address\":null,\"category\":[],\"assignee\":[\"27650148eb95aab058e8\",\"665835d124eeb5b36948\"],\"trip_id\":\"22647\",\"trip_job_id\":\"19839\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"sameer59@jobsglobal.net\",\"job_title_header\":\"Houskeeping Supervisor\"}",
            "created_at": "2024-01-23T11:16:50.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [
                {
                    "id": "070cf069-0311-43ce-80d0-0872b5a2069b",
                    "status": "Pending",
                    "cv_url": null,
                    "applyable_type": "App\\Models\\JobSeeker\\JobSeeker",
                    "applyable_id": "bbfab14e-b108-4e61-b3da-3936c54560da",
                    "job_id": "3f35c8e5-3a5b-475c-af4d-68c52c6d4946",
                    "created_at": "2024-05-30T05:51:38.000000Z",
                    "updated_at": "2024-05-30T05:51:38.000000Z"
                }
            ],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [
                {
                    "id": "070cf069-0311-43ce-80d0-0872b5a2069b",
                    "status": "Pending",
                    "cv_url": null,
                    "applyable_type": "App\\Models\\JobSeeker\\JobSeeker",
                    "applyable_id": "bbfab14e-b108-4e61-b3da-3936c54560da",
                    "job_id": "3f35c8e5-3a5b-475c-af4d-68c52c6d4946",
                    "created_at": "2024-05-30T05:51:38.000000Z",
                    "updated_at": "2024-05-30T05:51:38.000000Z"
                }
            ],
            "saved": false,
            "has_job_alert": false,
            "applied": true
        },
        {
            "id": "d024c1bd-f704-4759-ad45-45d3b7dd6d34",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/e32/063068-WhatsApp-Image-2024-01-18-at-18-24-51-jpeg.jpeg",
            "minimum_years_of_experience": 2,
            "title": "Laundry Dry Cleaner",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 3,
            "incremental_id": 2,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"1565afa01da655ae3460\",\"incremental_id\":null,\"job_title\":\"Laundry Dry Cleaner\",\"job_title_lower\":\"laundry dry cleaner\",\"job_group_id\":\"8e65afa01b8b546c7e68\",\"job_group_name\":\"Urgently required for the leading Hospitality in KSA (Makkah)\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"063068-WhatsApp-Image-2024-01-18-at-18-24-51-jpeg.jpeg\",\"created_by_user_id\":\"27650148eb95aab058e8\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"3\",\"yr_exp\":2,\"country_location\":[],\"country_source\":[],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-01-23 11:16:45\",\"date_created\":\"2024-01-23 11:16:45\",\"day_time\":[[]],\"tag\":[\"Laundry Dry Cleaner\"],\"address\":null,\"category\":[],\"assignee\":[\"27650148eb95aab058e8\",\"665835d124eeb5b36948\"],\"trip_id\":\"22647\",\"trip_job_id\":\"19852\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"sameer45@jobsglobal.net\",\"job_title_header\":\"Laundry Dry Cleaner\"}",
            "created_at": "2024-01-23T11:16:45.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [
                {
                    "id": "813c5dd3-8510-466d-a296-db066107e988",
                    "status": "Pending",
                    "cv_url": null,
                    "applyable_type": "App\\Models\\JobSeeker\\JobSeeker",
                    "applyable_id": "4ad0a48f-7234-4b8d-a738-64208bf3aa12",
                    "job_id": "d024c1bd-f704-4759-ad45-45d3b7dd6d34",
                    "created_at": "2024-06-17T10:47:41.000000Z",
                    "updated_at": "2024-06-17T10:47:41.000000Z"
                }
            ],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [
                {
                    "id": "813c5dd3-8510-466d-a296-db066107e988",
                    "status": "Pending",
                    "cv_url": null,
                    "applyable_type": "App\\Models\\JobSeeker\\JobSeeker",
                    "applyable_id": "4ad0a48f-7234-4b8d-a738-64208bf3aa12",
                    "job_id": "d024c1bd-f704-4759-ad45-45d3b7dd6d34",
                    "created_at": "2024-06-17T10:47:41.000000Z",
                    "updated_at": "2024-06-17T10:47:41.000000Z"
                }
            ],
            "saved": false,
            "has_job_alert": false,
            "applied": true
        },
        {
            "id": "ee051616-2074-4213-9123-3663825e3b08",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/b81/0e837e-srx-Sushi-Umi-10-JPG.jpeg",
            "minimum_years_of_experience": 0,
            "title": "Sushi Chef",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 1,
            "incremental_id": 3,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"9065c5e59c719d444d00\",\"incremental_id\":null,\"job_title\":\"Sushi Chef\",\"job_title_lower\":\"sushi chef\",\"job_group_id\":\"5165c5e59b7b9cb1c529\",\"job_group_name\":\"URGENTLY REQUIRED FOR A LEADING SEA FOOD RESTAURANT IN KSA\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"0e837e-srx-Sushi-Umi-10-JPG.jpeg\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"1\",\"yr_exp\":0,\"country_location\":[],\"country_source\":[],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-09 08:43:08\",\"date_created\":\"2024-02-09 08:43:08\",\"day_time\":[[]],\"tag\":[\"Sushi Chef\"],\"address\":null,\"category\":[],\"assignee\":[\"9e64900e3bd26b3dffae\",\"665835d124eeb5b36948\"],\"trip_id\":\"22755\",\"trip_job_id\":\"20280\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"Afrin237@jobsglobal.net\",\"job_title_header\":\"Sushi Chef\"}",
            "created_at": "2024-02-09T08:43:08.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "0e774d43-f6cb-47f4-a153-74e2509a5764",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/39f/76a2f0-download-jpg.jpeg",
            "minimum_years_of_experience": 5,
            "title": "Captain Order",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 4,
            "incremental_id": 4,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"9c65c5e59cbf9d74987b\",\"incremental_id\":null,\"job_title\":\"Captain Order\",\"job_title_lower\":\"captain order\",\"job_group_id\":\"5165c5e59b7b9cb1c529\",\"job_group_name\":\"URGENTLY REQUIRED FOR A LEADING SEA FOOD RESTAURANT IN KSA\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"76a2f0-download-jpg.jpeg\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"4\",\"yr_exp\":5,\"country_location\":[],\"country_source\":[],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-09 08:43:08\",\"date_created\":\"2024-02-09 08:43:08\",\"day_time\":[[]],\"tag\":[\"Captain Order\"],\"address\":null,\"category\":[],\"assignee\":[\"9e64900e3bd26b3dffae\",\"665835d124eeb5b36948\"],\"trip_id\":\"22755\",\"trip_job_id\":\"20279\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"Afrin238@jobsglobal.net\",\"job_title_header\":\"Captain Order\"}",
            "created_at": "2024-02-09T08:43:08.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "cfe28e06-5ff1-43a4-ab87-b4694552fd73",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/dc6/27fa71-OIP-jpg.jpeg",
            "minimum_years_of_experience": 5,
            "title": "CDP",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 2,
            "incremental_id": 5,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"6e65c5e59d599dcdad14\",\"incremental_id\":null,\"job_title\":\"CDP\",\"job_title_lower\":\"cdp\",\"job_group_id\":\"5165c5e59b7b9cb1c529\",\"job_group_name\":\"URGENTLY REQUIRED FOR A LEADING SEA FOOD RESTAURANT IN KSA\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"27fa71-OIP-jpg.jpeg\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"2\",\"yr_exp\":5,\"country_location\":[],\"country_source\":[],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-09 08:43:09\",\"date_created\":\"2024-02-09 08:43:09\",\"day_time\":[[]],\"tag\":[\"CDP\"],\"address\":null,\"category\":[],\"assignee\":[\"9e64900e3bd26b3dffae\",\"665835d124eeb5b36948\"],\"trip_id\":\"22755\",\"trip_job_id\":\"20277\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"Afrin240@jobsglobal.net\",\"job_title_header\":\"CDP\"}",
            "created_at": "2024-02-09T08:43:09.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "bbeba929-06e9-4c62-ab8d-e031cb451a1d",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/dc6/27fa71-OIP-jpg.jpeg",
            "minimum_years_of_experience": 5,
            "title": "Demi Cheif",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 4,
            "incremental_id": 6,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"7665c5e59dac9e019b77\",\"incremental_id\":null,\"job_title\":\"Demi Cheif\",\"job_title_lower\":\"demi cheif\",\"job_group_id\":\"5165c5e59b7b9cb1c529\",\"job_group_name\":\"URGENTLY REQUIRED FOR A LEADING SEA FOOD RESTAURANT IN KSA\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"27fa71-OIP-jpg.jpeg\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"4\",\"yr_exp\":5,\"country_location\":[],\"country_source\":[],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-09 08:43:09\",\"date_created\":\"2024-02-09 08:43:09\",\"day_time\":[[]],\"tag\":[\"Demi Cheif\"],\"address\":null,\"category\":[],\"assignee\":[\"9e64900e3bd26b3dffae\",\"665835d124eeb5b36948\"],\"trip_id\":\"22755\",\"trip_job_id\":\"20276\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"Afrin241@jobsglobal.net\",\"job_title_header\":\"Demi Cheif\"}",
            "created_at": "2024-02-09T08:43:09.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "dab36768-6017-4c17-9848-77d74ab2d187",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/2eb/99f8f80b-fa22-4302-92ab-1ef4e4b0693b.jpg",
            "minimum_years_of_experience": 0,
            "title": "Sales Merchandiser",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 30,
            "incremental_id": 7,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": "2024-02-23T00:00:00.000000Z",
            "duration_start": "2024-02-16T00:00:00.000000Z",
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "0e026fa7-a6c6-4142-9369-96510c0f229c",
                    "flag": "https://flagcdn.com/io.svg",
                    "name": "British Indian Ocean Territory",
                    "language": {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    "alpha2_code": "IO",
                    "calling_code": "246",
                    "work_space_meta_data": {
                        "id": "31",
                        "code": "IO",
                        "name": "British Indian Ocean Territory",
                        "phone_code": "246"
                    }
                },
                {
                    "id": "9b6d23f5-ce67-414d-823e-a65647b1de78",
                    "flag": "https://flagcdn.com/in.svg",
                    "name": "India",
                    "language": {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                    },
                    "alpha2_code": "IN",
                    "calling_code": "91",
                    "work_space_meta_data": {
                        "id": "99",
                        "code": "IN",
                        "name": "India",
                        "phone_code": "91"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "0e026fa7-a6c6-4142-9369-96510c0f229c",
                    "flag": "https://flagcdn.com/io.svg",
                    "name": "British Indian Ocean Territory",
                    "language": {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    "alpha2_code": "IO",
                    "calling_code": "246",
                    "work_space_meta_data": {
                        "id": "31",
                        "code": "IO",
                        "name": "British Indian Ocean Territory",
                        "phone_code": "246"
                    }
                },
                {
                    "id": "9b6d23f5-ce67-414d-823e-a65647b1de78",
                    "flag": "https://flagcdn.com/in.svg",
                    "name": "India",
                    "language": {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                    },
                    "alpha2_code": "IN",
                    "calling_code": "91",
                    "work_space_meta_data": {
                        "id": "99",
                        "code": "IN",
                        "name": "India",
                        "phone_code": "91"
                    }
                }
            ],
            "industries": [
                {
                    "id": "0d0b1a32-2c3d-409d-bcdd-06ac7ce3dca1",
                    "name": "Aviation/ Airlines/ Aerospace",
                    "work_space_meta_data": {
                        "id": "31",
                        "name": "Aviation/ Airlines/ Aerospace"
                    },
                    "created_at": "2024-05-14T09:51:30.000000Z",
                    "updated_at": "2024-05-14T09:51:30.000000Z"
                },
                {
                    "id": "c91d84e6-1ae7-4187-941a-3ce7a8dffba7",
                    "name": "Technical/Maintenance",
                    "work_space_meta_data": {
                        "id": "99",
                        "name": "Technical/Maintenance"
                    },
                    "created_at": "2024-05-14T09:51:30.000000Z",
                    "updated_at": "2024-05-14T09:51:30.000000Z"
                }
            ],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"b365d33c363bd45e1b18\",\"incremental_id\":null,\"job_title\":\"Sales Merchandiser\",\"job_title_lower\":\"sales merchandiser\",\"job_group_id\":\"5e65d33c3556d3d67e45\",\"job_group_name\":\"Sales Merchandiser (Home Appliance) -UAE\\u00a0\\n\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"99f8f80b-fa22-4302-92ab-1ef4e4b0693b.jpg\",\"created_by_user_id\":\"57656ebb22a07288fe1a\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"30\",\"yr_exp\":0,\"country_location\":[],\"country_source\":[31,99],\"job_industry\":[25],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-24 07:02:36\",\"date_created\":\"2024-02-19 11:32:06\",\"day_time\":[[]],\"tag\":[\"Sales Merchandiser \"],\"address\":null,\"category\":[],\"assignee\":[\"57656ebb22a07288fe1a\",\"665835d124eeb5b36948\"],\"trip_id\":\"22773\",\"trip_job_id\":\"20369\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"Umme Haani Patankar21@jobsglobal.net\",\"job_title_header\":\"Sales Merchandiser \",\"duration_end\":\"2024-02-23\",\"duration_start\":\"2024-02-16\",\"updated_by_user_id\":\"57656ebb22a07288fe1a\",\"trip_name\":\"Eros Electricals-Mumbai\"}",
            "created_at": "2024-02-19T11:32:06.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [
                {
                    "id": "21e341cf-30d3-4f67-bd0d-27690cbf7c70",
                    "status": "Pending",
                    "cv_url": null,
                    "applyable_type": "App\\Models\\JobSeeker\\JobSeeker",
                    "applyable_id": "c6b48780-e7e2-4469-bfa0-6be2c4c978a3",
                    "job_id": "dab36768-6017-4c17-9848-77d74ab2d187",
                    "created_at": "2024-06-10T12:03:03.000000Z",
                    "updated_at": "2024-06-10T12:03:03.000000Z"
                }
            ],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [
                {
                    "id": "21e341cf-30d3-4f67-bd0d-27690cbf7c70",
                    "status": "Pending",
                    "cv_url": null,
                    "applyable_type": "App\\Models\\JobSeeker\\JobSeeker",
                    "applyable_id": "c6b48780-e7e2-4469-bfa0-6be2c4c978a3",
                    "job_id": "dab36768-6017-4c17-9848-77d74ab2d187",
                    "created_at": "2024-06-10T12:03:03.000000Z",
                    "updated_at": "2024-06-10T12:03:03.000000Z"
                }
            ],
            "saved": false,
            "has_job_alert": false,
            "applied": true
        },
        {
            "id": "b9df5ee0-3789-4d2f-ae9e-017542fffb33",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/803/airpot-ground-crew-signal-19-PNG.png",
            "minimum_years_of_experience": 1,
            "title": "Equipment Operator",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 100,
            "incremental_id": 8,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "d2aeff92-c8a3-4503-a0c1-7dcf6af55fcd",
                    "flag": "https://flagcdn.com/kw.svg",
                    "name": "Kuwait",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "KW",
                    "calling_code": "965",
                    "work_space_meta_data": {
                        "id": "114",
                        "code": "KW",
                        "name": "Kuwait",
                        "phone_code": "965"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "d2aeff92-c8a3-4503-a0c1-7dcf6af55fcd",
                    "flag": "https://flagcdn.com/kw.svg",
                    "name": "Kuwait",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "KW",
                    "calling_code": "965",
                    "work_space_meta_data": {
                        "id": "114",
                        "code": "KW",
                        "name": "Kuwait",
                        "phone_code": "965"
                    }
                }
            ],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"5165d9865724850b6031\",\"incremental_id\":null,\"job_title\":\"Equipment Operator\",\"job_title_lower\":\"equipment operator\",\"job_group_id\":\"9765d986549f838e908b\",\"job_group_name\":\"URGENTLY REQUIRED FOR A INTERNATIONAL CIVIL AVIATION - KUWAIT\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"airpot-ground-crew-signal-19-PNG.png\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":100,\"yr_exp\":1,\"country_location\":[114],\"country_source\":[114],\"job_industry\":[31,65],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-24 06:01:59\",\"date_created\":\"2024-02-24 06:01:59\",\"day_time\":[[]],\"tag\":[\"Equipment Operator\"],\"address\":null,\"category\":[],\"assignee\":null,\"trip_id\":null,\"trip_job_id\":null,\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"af260@jobsglobal.net\",\"job_title_header\":\"Equipment Operator\"}",
            "created_at": "2024-02-24T06:01:59.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "74d495ab-8eaa-4ff2-8bc9-32773509a49a",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/803/airpot-ground-crew-signal-19-PNG.png",
            "minimum_years_of_experience": 1,
            "title": "Operations Agent",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 100,
            "incremental_id": 9,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "d2aeff92-c8a3-4503-a0c1-7dcf6af55fcd",
                    "flag": "https://flagcdn.com/kw.svg",
                    "name": "Kuwait",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "KW",
                    "calling_code": "965",
                    "work_space_meta_data": {
                        "id": "114",
                        "code": "KW",
                        "name": "Kuwait",
                        "phone_code": "965"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "d2aeff92-c8a3-4503-a0c1-7dcf6af55fcd",
                    "flag": "https://flagcdn.com/kw.svg",
                    "name": "Kuwait",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "KW",
                    "calling_code": "965",
                    "work_space_meta_data": {
                        "id": "114",
                        "code": "KW",
                        "name": "Kuwait",
                        "phone_code": "965"
                    }
                }
            ],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"4f65d986577985404e50\",\"incremental_id\":null,\"job_title\":\"Operations Agent\",\"job_title_lower\":\"operations agent\",\"job_group_id\":\"9765d986549f838e908b\",\"job_group_name\":\"URGENTLY REQUIRED FOR A INTERNATIONAL CIVIL AVIATION - KUWAIT\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"airpot-ground-crew-signal-19-PNG.png\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":100,\"yr_exp\":1,\"country_location\":[114],\"country_source\":[114],\"job_industry\":[31,65],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-24 06:01:59\",\"date_created\":\"2024-02-24 06:01:59\",\"day_time\":[[]],\"tag\":[\"Operations Agent\"],\"address\":null,\"category\":[],\"assignee\":null,\"trip_id\":null,\"trip_job_id\":null,\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"af261@jobsglobal.net\",\"job_title_header\":\"Operations Agent\"}",
            "created_at": "2024-02-24T06:01:59.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "8e1b7d04-7d64-455a-b23a-3da536576383",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/c7a/fc9405-OIP-4-jpeg.jpeg",
            "minimum_years_of_experience": 1,
            "title": "Engineering and Maintenance Manager",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 10,
            "incremental_id": 10,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "bd9c75ac-82a2-4275-9a8f-da73189342cb",
                    "flag": "https://flagcdn.com/sa.svg",
                    "name": "Saudi Arabia",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "SA",
                    "calling_code": "966",
                    "work_space_meta_data": {
                        "id": "187",
                        "code": "SA",
                        "name": "Saudi Arabia",
                        "phone_code": "966"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "bd9c75ac-82a2-4275-9a8f-da73189342cb",
                    "flag": "https://flagcdn.com/sa.svg",
                    "name": "Saudi Arabia",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "SA",
                    "calling_code": "966",
                    "work_space_meta_data": {
                        "id": "187",
                        "code": "SA",
                        "name": "Saudi Arabia",
                        "phone_code": "966"
                    }
                }
            ],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"9665f566006b9c6671ec\",\"incremental_id\":null,\"job_title\":\"Engineering and Maintenance Manager\",\"job_title_lower\":\"engineering and maintenance manager\",\"job_group_id\":\"a165f56600379c462237\",\"job_group_name\":\"REQUIRED FOR A LEADING RESTAURANT IN KSA\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"fc9405-OIP-4-jpeg.jpeg\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":10,\"yr_exp\":1,\"country_location\":[187],\"country_source\":[187],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-03-16 09:27:28\",\"date_created\":\"2024-03-16 09:27:28\",\"day_time\":[[]],\"tag\":[\"<span style=\\\"font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif;\\nmso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-ansi-language:\\nEN-IN;mso-fareast-language:EN-US;mso-bidi-language:AR-SA\\\">Engineering and Maintenance Manager<\\/span>\"],\"address\":null,\"category\":[],\"assignee\":null,\"trip_id\":null,\"trip_job_id\":null,\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"af282@jobsglobal.net\",\"job_title_header\":\"<span style=\\\"font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif;\\nmso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-ansi-language:\\nEN-IN;mso-fareast-language:EN-US;mso-bidi-language:AR-SA\\\">Engineering and Maintenance Manager<\\/span>\"}",
            "created_at": "2024-03-16T09:27:28.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "3989644a-262a-4ead-bf23-323515c4d936",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/325/150bf4-Painter-Contractor-201807-002-720x475-jpg.jpeg",
            "minimum_years_of_experience": 5,
            "title": "Mas Paints",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 2,
            "incremental_id": 11,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"1565f54a9008419ef435\",\"incremental_id\":null,\"job_title\":\"Mas Paints\",\"job_title_lower\":\"mas paints\",\"job_group_id\":\"da65f54a8f94415dfdc7\",\"job_group_name\":\"Decorative Painter\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"150bf4-Painter-Contractor-201807-002-720x475-jpg.jpeg\",\"created_by_user_id\":\"b364ddca4523b910cc09\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"2\",\"yr_exp\":5,\"country_location\":[],\"country_source\":[],\"job_industry\":[57],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-03-16 07:30:24\",\"date_created\":\"2024-03-16 07:30:24\",\"day_time\":[[]],\"tag\":[\"Mas Paints\"],\"address\":null,\"category\":[],\"assignee\":[\"b364ddca4523b910cc09\",\"665835d124eeb5b36948\"],\"trip_id\":\"22845\",\"trip_job_id\":\"20577\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"ShaliniSharma188@jobsglobal.net\",\"job_title_header\":\"Mas Paints\"}",
            "created_at": "2024-03-16T07:30:24.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "ff33d557-a094-4b82-8727-753219a8e307",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/627/1857f4-WhatsApp-Image-2024-01-24-at-12-56-19-PM-jpeg.jpeg",
            "minimum_years_of_experience": 3,
            "title": "FABRICATOR FOREMAN",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 1000,
            "salary_from": 1000,
            "number_of_vacancies": 2,
            "incremental_id": 12,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"1065b8cecdd86c43a567\",\"incremental_id\":null,\"job_title\":\"FABRICATOR FOREMAN\",\"job_title_lower\":\"fabricator foreman\",\"job_group_id\":\"9965b8cecd666bfc6e3b\",\"job_group_name\":\"URGENTLY REQUIRE FOR A LEADING CONSTRUCTION COMPANY IN UAE\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":\"1000\",\"salary_to\":\"1000\",\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"1857f4-WhatsApp-Image-2024-01-24-at-12-56-19-PM-jpeg.jpeg\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"2\",\"yr_exp\":3,\"country_location\":[],\"country_source\":[],\"job_industry\":[9],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-01-30 10:26:21\",\"date_created\":\"2024-01-30 10:26:21\",\"day_time\":[[]],\"tag\":[\"FABRICATOR FOREMAN\"],\"address\":null,\"category\":[],\"assignee\":[\"9e64900e3bd26b3dffae\",\"665835d124eeb5b36948\"],\"trip_id\":\"22671\",\"trip_job_id\":\"19971\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"Afrin225@jobsglobal.net\",\"job_title_header\":\"FABRICATOR FOREMAN\"}",
            "created_at": "2024-01-30T10:26:21.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "8355d205-3946-4fc7-9d4d-cd4b601c6f27",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/627/1857f4-WhatsApp-Image-2024-01-24-at-12-56-19-PM-jpeg.jpeg",
            "minimum_years_of_experience": 3,
            "title": "STEEL FABRICATOR",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 800,
            "salary_from": 800,
            "number_of_vacancies": 3,
            "incremental_id": 13,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"a065b8cece8d6cad0db3\",\"incremental_id\":null,\"job_title\":\"STEEL FABRICATOR\",\"job_title_lower\":\"steel fabricator\",\"job_group_id\":\"9965b8cecd666bfc6e3b\",\"job_group_name\":\"URGENTLY REQUIRE FOR A LEADING CONSTRUCTION COMPANY IN UAE\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":\"800\",\"salary_to\":\"800\",\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"1857f4-WhatsApp-Image-2024-01-24-at-12-56-19-PM-jpeg.jpeg\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"3\",\"yr_exp\":3,\"country_location\":[],\"country_source\":[],\"job_industry\":[9],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-01-30 10:26:22\",\"date_created\":\"2024-01-30 10:26:22\",\"day_time\":[[]],\"tag\":[\"STEEL FABRICATOR\"],\"address\":null,\"category\":[],\"assignee\":[\"9e64900e3bd26b3dffae\",\"665835d124eeb5b36948\"],\"trip_id\":\"22671\",\"trip_job_id\":\"19969\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"Afrin227@jobsglobal.net\",\"job_title_header\":\"STEEL FABRICATOR\"}",
            "created_at": "2024-01-30T10:26:22.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "3a675cc0-63b2-4719-8bfb-88ca5515398e",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/ac7/dcea65-WhatsApp-Image-2024-02-12-at-18-20-45-jpeg.jpeg",
            "minimum_years_of_experience": 0,
            "title": "Commis III",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": null,
            "incremental_id": 14,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:48.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "0e026fa7-a6c6-4142-9369-96510c0f229c",
                    "flag": "https://flagcdn.com/io.svg",
                    "name": "British Indian Ocean Territory",
                    "language": {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    "alpha2_code": "IO",
                    "calling_code": "246",
                    "work_space_meta_data": {
                        "id": "31",
                        "code": "IO",
                        "name": "British Indian Ocean Territory",
                        "phone_code": "246"
                    }
                },
                {
                    "id": "9b6d23f5-ce67-414d-823e-a65647b1de78",
                    "flag": "https://flagcdn.com/in.svg",
                    "name": "India",
                    "language": {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                    },
                    "alpha2_code": "IN",
                    "calling_code": "91",
                    "work_space_meta_data": {
                        "id": "99",
                        "code": "IN",
                        "name": "India",
                        "phone_code": "91"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "0e026fa7-a6c6-4142-9369-96510c0f229c",
                    "flag": "https://flagcdn.com/io.svg",
                    "name": "British Indian Ocean Territory",
                    "language": {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    "alpha2_code": "IO",
                    "calling_code": "246",
                    "work_space_meta_data": {
                        "id": "31",
                        "code": "IO",
                        "name": "British Indian Ocean Territory",
                        "phone_code": "246"
                    }
                },
                {
                    "id": "9b6d23f5-ce67-414d-823e-a65647b1de78",
                    "flag": "https://flagcdn.com/in.svg",
                    "name": "India",
                    "language": {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                    },
                    "alpha2_code": "IN",
                    "calling_code": "91",
                    "work_space_meta_data": {
                        "id": "99",
                        "code": "IN",
                        "name": "India",
                        "phone_code": "91"
                    }
                }
            ],
            "industries": [
                {
                    "id": "0d0b1a32-2c3d-409d-bcdd-06ac7ce3dca1",
                    "name": "Aviation/ Airlines/ Aerospace",
                    "work_space_meta_data": {
                        "id": "31",
                        "name": "Aviation/ Airlines/ Aerospace"
                    },
                    "created_at": "2024-05-14T09:51:30.000000Z",
                    "updated_at": "2024-05-14T09:51:30.000000Z"
                },
                {
                    "id": "c91d84e6-1ae7-4187-941a-3ce7a8dffba7",
                    "name": "Technical/Maintenance",
                    "work_space_meta_data": {
                        "id": "99",
                        "name": "Technical/Maintenance"
                    },
                    "created_at": "2024-05-14T09:51:30.000000Z",
                    "updated_at": "2024-05-14T09:51:30.000000Z"
                }
            ],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"5165ca154d9c60df0906\",\"incremental_id\":null,\"job_title\":\"Commis III\",\"job_title_lower\":\"commis iii\",\"job_group_id\":\"ec65ca154b1d5f5e42a1\",\"job_group_name\":\"Urgent Required for a leading\\u00a0 Bakery Company In Kuwait\\u00a0\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"dcea65-WhatsApp-Image-2024-02-12-at-18-20-45-jpeg.jpeg\",\"created_by_user_id\":\"27650148eb95aab058e8\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":null,\"yr_exp\":0,\"country_location\":[114],\"country_source\":[31,99],\"job_industry\":[66],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-12 12:55:41\",\"date_created\":\"2024-02-12 12:55:41\",\"day_time\":[[]],\"tag\":[\"Commis III \"],\"address\":null,\"category\":[],\"assignee\":[\"27650148eb95aab058e8\",\"665835d124eeb5b36948\"],\"trip_id\":\"22129\",\"trip_job_id\":\"19556\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"sameer72@jobsglobal.net\",\"job_title_header\":\"Commis III \"}",
            "created_at": "2024-02-12T12:55:41.000000Z",
            "updated_at": "2024-05-14T09:51:48.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "8f2c6125-cebe-42d4-a3e7-a8b43cc6c417",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/ac7/dcea65-WhatsApp-Image-2024-02-12-at-18-20-45-jpeg.jpeg",
            "minimum_years_of_experience": 0,
            "title": "Dough maker",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": null,
            "incremental_id": 15,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:49.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "0e026fa7-a6c6-4142-9369-96510c0f229c",
                    "flag": "https://flagcdn.com/io.svg",
                    "name": "British Indian Ocean Territory",
                    "language": {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    "alpha2_code": "IO",
                    "calling_code": "246",
                    "work_space_meta_data": {
                        "id": "31",
                        "code": "IO",
                        "name": "British Indian Ocean Territory",
                        "phone_code": "246"
                    }
                },
                {
                    "id": "9b6d23f5-ce67-414d-823e-a65647b1de78",
                    "flag": "https://flagcdn.com/in.svg",
                    "name": "India",
                    "language": {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                    },
                    "alpha2_code": "IN",
                    "calling_code": "91",
                    "work_space_meta_data": {
                        "id": "99",
                        "code": "IN",
                        "name": "India",
                        "phone_code": "91"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "0e026fa7-a6c6-4142-9369-96510c0f229c",
                    "flag": "https://flagcdn.com/io.svg",
                    "name": "British Indian Ocean Territory",
                    "language": {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    "alpha2_code": "IO",
                    "calling_code": "246",
                    "work_space_meta_data": {
                        "id": "31",
                        "code": "IO",
                        "name": "British Indian Ocean Territory",
                        "phone_code": "246"
                    }
                },
                {
                    "id": "9b6d23f5-ce67-414d-823e-a65647b1de78",
                    "flag": "https://flagcdn.com/in.svg",
                    "name": "India",
                    "language": {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                    },
                    "alpha2_code": "IN",
                    "calling_code": "91",
                    "work_space_meta_data": {
                        "id": "99",
                        "code": "IN",
                        "name": "India",
                        "phone_code": "91"
                    }
                }
            ],
            "industries": [
                {
                    "id": "0d0b1a32-2c3d-409d-bcdd-06ac7ce3dca1",
                    "name": "Aviation/ Airlines/ Aerospace",
                    "work_space_meta_data": {
                        "id": "31",
                        "name": "Aviation/ Airlines/ Aerospace"
                    },
                    "created_at": "2024-05-14T09:51:30.000000Z",
                    "updated_at": "2024-05-14T09:51:30.000000Z"
                },
                {
                    "id": "c91d84e6-1ae7-4187-941a-3ce7a8dffba7",
                    "name": "Technical/Maintenance",
                    "work_space_meta_data": {
                        "id": "99",
                        "name": "Technical/Maintenance"
                    },
                    "created_at": "2024-05-14T09:51:30.000000Z",
                    "updated_at": "2024-05-14T09:51:30.000000Z"
                }
            ],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"1165ca154e06611994fc\",\"incremental_id\":null,\"job_title\":\"Dough maker\",\"job_title_lower\":\"dough maker\",\"job_group_id\":\"ec65ca154b1d5f5e42a1\",\"job_group_name\":\"Urgent Required for a leading\\u00a0 Bakery Company In Kuwait\\u00a0\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"dcea65-WhatsApp-Image-2024-02-12-at-18-20-45-jpeg.jpeg\",\"created_by_user_id\":\"27650148eb95aab058e8\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":null,\"yr_exp\":0,\"country_location\":[114],\"country_source\":[31,99],\"job_industry\":[66],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-12 12:55:42\",\"date_created\":\"2024-02-12 12:55:42\",\"day_time\":[[]],\"tag\":[\"Dough maker\"],\"address\":null,\"category\":[],\"assignee\":[\"27650148eb95aab058e8\",\"665835d124eeb5b36948\"],\"trip_id\":\"22129\",\"trip_job_id\":\"19555\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"sameer73@jobsglobal.net\",\"job_title_header\":\"Dough maker\"}",
            "created_at": "2024-02-12T12:55:42.000000Z",
            "updated_at": "2024-05-14T09:51:49.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "d23f6792-0a87-468b-a1ed-6c6c02b62955",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/ac7/dcea65-WhatsApp-Image-2024-02-12-at-18-20-45-jpeg.jpeg",
            "minimum_years_of_experience": 0,
            "title": "Packer",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": null,
            "incremental_id": 16,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:49.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "0e026fa7-a6c6-4142-9369-96510c0f229c",
                    "flag": "https://flagcdn.com/io.svg",
                    "name": "British Indian Ocean Territory",
                    "language": {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    "alpha2_code": "IO",
                    "calling_code": "246",
                    "work_space_meta_data": {
                        "id": "31",
                        "code": "IO",
                        "name": "British Indian Ocean Territory",
                        "phone_code": "246"
                    }
                },
                {
                    "id": "9b6d23f5-ce67-414d-823e-a65647b1de78",
                    "flag": "https://flagcdn.com/in.svg",
                    "name": "India",
                    "language": {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                    },
                    "alpha2_code": "IN",
                    "calling_code": "91",
                    "work_space_meta_data": {
                        "id": "99",
                        "code": "IN",
                        "name": "India",
                        "phone_code": "91"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "0e026fa7-a6c6-4142-9369-96510c0f229c",
                    "flag": "https://flagcdn.com/io.svg",
                    "name": "British Indian Ocean Territory",
                    "language": {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    "alpha2_code": "IO",
                    "calling_code": "246",
                    "work_space_meta_data": {
                        "id": "31",
                        "code": "IO",
                        "name": "British Indian Ocean Territory",
                        "phone_code": "246"
                    }
                },
                {
                    "id": "9b6d23f5-ce67-414d-823e-a65647b1de78",
                    "flag": "https://flagcdn.com/in.svg",
                    "name": "India",
                    "language": {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                    },
                    "alpha2_code": "IN",
                    "calling_code": "91",
                    "work_space_meta_data": {
                        "id": "99",
                        "code": "IN",
                        "name": "India",
                        "phone_code": "91"
                    }
                }
            ],
            "industries": [
                {
                    "id": "0d0b1a32-2c3d-409d-bcdd-06ac7ce3dca1",
                    "name": "Aviation/ Airlines/ Aerospace",
                    "work_space_meta_data": {
                        "id": "31",
                        "name": "Aviation/ Airlines/ Aerospace"
                    },
                    "created_at": "2024-05-14T09:51:30.000000Z",
                    "updated_at": "2024-05-14T09:51:30.000000Z"
                },
                {
                    "id": "c91d84e6-1ae7-4187-941a-3ce7a8dffba7",
                    "name": "Technical/Maintenance",
                    "work_space_meta_data": {
                        "id": "99",
                        "name": "Technical/Maintenance"
                    },
                    "created_at": "2024-05-14T09:51:30.000000Z",
                    "updated_at": "2024-05-14T09:51:30.000000Z"
                }
            ],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"cd65ca154b755f95a561\",\"incremental_id\":null,\"job_title\":\"Packer\",\"job_title_lower\":\"packer\",\"job_group_id\":\"ec65ca154b1d5f5e42a1\",\"job_group_name\":\"Urgent Required for a leading\\u00a0 Bakery Company In Kuwait\\u00a0\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"dcea65-WhatsApp-Image-2024-02-12-at-18-20-45-jpeg.jpeg\",\"created_by_user_id\":\"27650148eb95aab058e8\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":null,\"yr_exp\":0,\"country_location\":[114],\"country_source\":[31,99],\"job_industry\":[66],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-12 12:55:39\",\"date_created\":\"2024-02-12 12:55:39\",\"day_time\":[[]],\"tag\":[\"Packer\"],\"address\":null,\"category\":[],\"assignee\":[\"27650148eb95aab058e8\",\"665835d124eeb5b36948\"],\"trip_id\":\"22129\",\"trip_job_id\":\"19562\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"sameer66@jobsglobal.net\",\"job_title_header\":\"Packer\"}",
            "created_at": "2024-02-12T12:55:39.000000Z",
            "updated_at": "2024-05-14T09:51:49.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "69084e58-662e-428f-8828-647609195686",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/ca2/cook-restaurant-43-PNG.png",
            "minimum_years_of_experience": 1,
            "title": "Asian Commi",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 20,
            "incremental_id": 17,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:49.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "flag": "https://flagcdn.com/ae.svg",
                    "name": "United Arab Emirates",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "AE",
                    "calling_code": "971",
                    "work_space_meta_data": {
                        "id": "224",
                        "code": "AE",
                        "name": "United Arab Emirates",
                        "phone_code": "971"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "flag": "https://flagcdn.com/ae.svg",
                    "name": "United Arab Emirates",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "AE",
                    "calling_code": "971",
                    "work_space_meta_data": {
                        "id": "224",
                        "code": "AE",
                        "name": "United Arab Emirates",
                        "phone_code": "971"
                    }
                }
            ],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"9b65d715b88139c3ca41\",\"incremental_id\":null,\"job_title\":\"Asian Commi\",\"job_title_lower\":\"asian commi\",\"job_group_id\":\"3265d715b73938fdea0d\",\"job_group_name\":\"Epik Food-UAE\\u00a0\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"cook-restaurant-43-PNG.png\",\"created_by_user_id\":\"57656ebb22a07288fe1a\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":20,\"yr_exp\":1,\"country_location\":[224],\"country_source\":[224],\"job_industry\":[11,12],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-22 09:36:56\",\"date_created\":\"2024-02-22 09:36:56\",\"day_time\":[[]],\"tag\":[\"Asian Commi\"],\"address\":null,\"category\":[],\"assignee\":null,\"trip_id\":null,\"trip_job_id\":null,\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"umme33@jobsglobal.net\",\"job_title_header\":\"Asian Commi\"}",
            "created_at": "2024-02-22T09:36:56.000000Z",
            "updated_at": "2024-05-14T09:51:49.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "bb984d49-57bf-49a8-986e-17f8e1940b86",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/ca2/cook-restaurant-43-PNG.png",
            "minimum_years_of_experience": 1,
            "title": "Breakfast Commi",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 20,
            "incremental_id": 18,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:49.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "flag": "https://flagcdn.com/ae.svg",
                    "name": "United Arab Emirates",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "AE",
                    "calling_code": "971",
                    "work_space_meta_data": {
                        "id": "224",
                        "code": "AE",
                        "name": "United Arab Emirates",
                        "phone_code": "971"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "flag": "https://flagcdn.com/ae.svg",
                    "name": "United Arab Emirates",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "AE",
                    "calling_code": "971",
                    "work_space_meta_data": {
                        "id": "224",
                        "code": "AE",
                        "name": "United Arab Emirates",
                        "phone_code": "971"
                    }
                }
            ],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"e165d715b8d739f9b2f2\",\"incremental_id\":null,\"job_title\":\"Breakfast Commi\",\"job_title_lower\":\"breakfast commi\",\"job_group_id\":\"3265d715b73938fdea0d\",\"job_group_name\":\"Epik Food-UAE\\u00a0\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"cook-restaurant-43-PNG.png\",\"created_by_user_id\":\"57656ebb22a07288fe1a\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":20,\"yr_exp\":1,\"country_location\":[224],\"country_source\":[224],\"job_industry\":[11,12],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-02-22 09:36:56\",\"date_created\":\"2024-02-22 09:36:56\",\"day_time\":[[]],\"tag\":[\"Breakfast Commi\"],\"address\":null,\"category\":[],\"assignee\":null,\"trip_id\":null,\"trip_job_id\":null,\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"umme34@jobsglobal.net\",\"job_title_header\":\"Breakfast Commi\"}",
            "created_at": "2024-02-22T09:36:56.000000Z",
            "updated_at": "2024-05-14T09:51:49.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "9c3879fd-e9d0-43fb-b62a-b0c03c67b172",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/6ac/190f9a-60a4bc8b-8ee2-4015-868a-423e079b8e76-b98b4b7d-jpg.jpeg",
            "minimum_years_of_experience": 0,
            "title": "Painter",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 2,
            "incremental_id": 19,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:49.000000Z",
            "preferred_applicant_countries_sources": [],
            "job_locations": [],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"a365fa7acb18ed07d0a0\",\"incremental_id\":null,\"job_title\":\"Painter\",\"job_title_lower\":\"painter\",\"job_group_id\":\"1d65fa7ac713eaa200a5\",\"job_group_name\":\"Opening For Sheybarah Island-KSA\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"190f9a-60a4bc8b-8ee2-4015-868a-423e079b8e76-b98b4b7d-jpg.jpeg\",\"created_by_user_id\":\"b364ddca4523b910cc09\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":\"2\",\"yr_exp\":0,\"country_location\":[],\"country_source\":[],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-03-20 05:57:31\",\"date_created\":\"2024-03-20 05:57:31\",\"day_time\":[[]],\"tag\":[\"Painter\"],\"address\":null,\"category\":[],\"assignee\":[\"b364ddca4523b910cc09\",\"665835d124eeb5b36948\"],\"trip_id\":\"22860\",\"trip_job_id\":\"20653\",\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"ShaliniSharma202@jobsglobal.net\",\"job_title_header\":\"Painter\"}",
            "created_at": "2024-03-20T05:57:31.000000Z",
            "updated_at": "2024-05-14T09:51:49.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        },
        {
            "id": "d7e611d5-4773-422d-90d1-8f40cc77821d",
            "jobable_id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
            "cover": "https://jobsglobal.com/tree/47f/179144-KITCHEN-EQUIPMENT-ARTWORK-jpg.jpeg",
            "minimum_years_of_experience": 1,
            "title": "KITCHEN EQUIPMENT TECHNICIAN",
            "description": null,
            "basic_salary_to": 0,
            "basic_salary_from": 0,
            "salary_to": 0,
            "salary_from": 0,
            "number_of_vacancies": 10,
            "incremental_id": 20,
            "type": "Full-Time",
            "priority": "urgent",
            "duration_end": null,
            "duration_start": null,
            "job_duration_end": null,
            "job_duration_start": null,
            "date_closed": null,
            "date_rejected": null,
            "date_published": "2024-05-14T09:51:49.000000Z",
            "preferred_applicant_countries_sources": [
                {
                    "id": "bd9c75ac-82a2-4275-9a8f-da73189342cb",
                    "flag": "https://flagcdn.com/sa.svg",
                    "name": "Saudi Arabia",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "SA",
                    "calling_code": "966",
                    "work_space_meta_data": {
                        "id": "187",
                        "code": "SA",
                        "name": "Saudi Arabia",
                        "phone_code": "966"
                    }
                }
            ],
            "job_locations": [
                {
                    "id": "bd9c75ac-82a2-4275-9a8f-da73189342cb",
                    "flag": "https://flagcdn.com/sa.svg",
                    "name": "Saudi Arabia",
                    "language": {
                        "iso639_1": "ar",
                        "iso639_2": "ara",
                        "name": "Arabic",
                        "nativeName": "العربية"
                    },
                    "alpha2_code": "SA",
                    "calling_code": "966",
                    "work_space_meta_data": {
                        "id": "187",
                        "code": "SA",
                        "name": "Saudi Arabia",
                        "phone_code": "966"
                    }
                }
            ],
            "industries": [],
            "skills": null,
            "tags": [],
            "work_space_meta_data": "{\"job_post_id\":\"4665f936e662dfeef081\",\"incremental_id\":null,\"job_title\":\"KITCHEN EQUIPMENT TECHNICIAN\",\"job_title_lower\":\"kitchen equipment technician\",\"job_group_id\":\"9865f936e621dfc63b87\",\"job_group_name\":\"REQUIREMENT FOR KITCHEN EQUIPMENT TECHNICIAN\",\"base_salary_from\":0,\"base_salary_to\":0,\"salary_from\":0,\"salary_to\":0,\"page_id\":\"page_b060339dfcce20\",\"page_name\":\"JobsGlobal.com - India - Mumbai\",\"cover\":\"179144-KITCHEN-EQUIPMENT-ARTWORK-jpg.jpeg\",\"created_by_user_id\":\"9e64900e3bd26b3dffae\",\"currency_code\":\"\",\"post_status\":\"3\",\"employment_type\":1,\"is_crawled\":0,\"is_deleted\":0,\"priority\":1,\"vacancies\":10,\"yr_exp\":1,\"country_location\":[187],\"country_source\":[187],\"job_industry\":[14],\"job_duration_start\":null,\"job_duration_end\":null,\"date_published\":null,\"date_updated\":\"2024-03-19 06:55:34\",\"date_created\":\"2024-03-19 06:55:34\",\"day_time\":[[]],\"tag\":[\"KITCHEN EQUIPMENT TECHNICIAN\"],\"address\":null,\"category\":[],\"assignee\":null,\"trip_id\":null,\"trip_job_id\":null,\"latitude\":\"\",\"longitude\":\"\",\"email_linked\":\"af294@jobsglobal.net\",\"job_title_header\":\"KITCHEN EQUIPMENT TECHNICIAN\"}",
            "created_at": "2024-03-19T06:55:34.000000Z",
            "updated_at": "2024-05-14T09:51:49.000000Z",
            "apply": [],
            "location": null,
            "attachments": [],
            "page": {
                "id": "68d92ec8-9073-41a1-ad22-235eb86363f0",
                "employer_id": null,
                "name": "JobsGlobal.com - India - Mumbai",
                "telephone": "+42833350",
                "alias": "JobsGlobal - Mumbai, India",
                "about": null,
                "services": null,
                "company_size": "11-20 employees",
                "page_type": "Branch",
                "work_space_meta_data": {
                    "id": "page_b060339dfcce20",
                    "incremental_id": 1646,
                    "page_name": "JobsGlobal.com - India - Mumbai",
                    "alias": "JobsGlobal - Mumbai, India",
                    "account_status": "deactivated",
                    "page_avatar": "a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "page_cover": "",
                    "company_email": "mumbai@jobsglobal.com",
                    "country_id": 31,
                    "industry_id": 65,
                    "is_verified": 1,
                    "is_verified_documents": 1,
                    "date_created": "2021-02-22 13:16:15",
                    "date_updated": "2022-02-07 06:47:37"
                },
                "created_at": "2024-05-14T09:51:43.000000Z",
                "updated_at": "2024-05-14T09:51:43.000000Z",
                "status": "pending",
                "location": {
                    "id": "330bafc0-3103-47f2-9b92-dcf903cc5064",
                    "city_id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                    "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                    "address_line_one": "Office 1401, 14th Floor, Al Attar Tower, Sheikh Zayed Road, Dubai, UAE",
                    "address_line_two": "P.O. Box 43630",
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "country": {
                        "id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "flag": "https://flagcdn.com/ae.svg",
                        "name": "United Arab Emirates",
                        "language": {
                            "iso639_1": "ar",
                            "iso639_2": "ara",
                            "name": "Arabic",
                            "nativeName": "العربية"
                        },
                        "alpha2_code": "AE",
                        "calling_code": "971",
                        "work_space_meta_data": {
                            "id": "224",
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "phone_code": "971"
                        }
                    },
                    "city": {
                        "id": "b858a67c-0747-4715-beb2-36c7d269e4be",
                        "state_id": null,
                        "country_id": "2ba00664-4563-4def-a672-3cbe8daddad8",
                        "region": null,
                        "name": "Dubai",
                        "latitude": 25.2522,
                        "longitude": 55.28,
                        "work_space_meta_data": {
                            "country_id": "224",
                            "id": "20",
                            "name": "Dubai",
                            "geo_location": {
                                "lat": "25.2522",
                                "lon": "55.28"
                            }
                        },
                        "created_at": "2024-05-14T09:51:29.000000Z",
                        "updated_at": "2024-05-14T09:51:29.000000Z"
                    },
                    "industry": {
                        "id": "d6fdcfd4-32e7-45a3-b73d-4f80897c5609",
                        "name": "Human Resources/Recruitment",
                        "work_space_meta_data": {
                            "id": "65",
                            "name": "Human Resources/Recruitment"
                        },
                        "created_at": "2024-05-14T09:51:30.000000Z",
                        "updated_at": "2024-05-14T09:51:30.000000Z"
                    },
                    "coordinates": {
                        "latitude": 0,
                        "longitude": 0
                    },
                    "country_and_city": "Dubai, United Arab Emirates"
                },
                "information": {
                    "id": "af838b1a-4874-4fe1-adc8-daddca3a9ca1",
                    "cover": "https://jobsglobal.com/tree/d41/",
                    "avatar": "https://jobsglobal.com/tree/7ad/a579a5-final-jobsglobal-logo-NO-BACKGROUND-jp",
                    "last_name": null,
                    "first_name": null,
                    "middle_name": null,
                    "gender": null,
                    "civil_status": null,
                    "industry_id": null,
                    "date_of_birth": null,
                    "created_at": "2024-05-14T09:51:43.000000Z",
                    "updated_at": "2024-05-14T09:51:43.000000Z",
                    "full_name_reversed": null,
                    "full_name": null
                }
            },
            "saved_job": null,
            "job_alert": null,
            "applications": [],
            "saved": false,
            "has_job_alert": false,
            "applied": false
        }
    ],
    "links": {
        "first": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=1",
        "last": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=46926",
        "prev": null,
        "next": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=2"
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 46926,
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=5",
                "label": "5",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=6",
                "label": "6",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=7",
                "label": "7",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=8",
                "label": "8",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=9",
                "label": "9",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=10",
                "label": "10",
                "active": false
            },
            {
                "url": null,
                "label": "...",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=46925",
                "label": "46925",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=46926",
                "label": "46926",
                "active": false
            },
            {
                "url": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "https://api-next.jobsglobal.com:54902/api/v1/jobs/all",
        "per_page": 20,
        "to": 20,
        "total": 938518
    }
}

  constructor(private http: HttpClient) { }

  getJops(page: number): Observable<{jops: Jop[], lastPage: number}> { // Jop[]
    // return of({jops: this.res.data, lastPage: this.res.meta.last_page})
    return this.http.get<{data: Jop[], meta: any}>(this.apiUrl, {params: {
      pagination_type: 'paginate',
      page,
      per_page: 20
    }}).pipe(map(({data, meta}) => ({jops: data, lastPage: meta.last_page})))
  }
}
