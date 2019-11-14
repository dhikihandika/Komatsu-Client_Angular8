/*
Aothuor : dhkihandika
Date    : 22/10/2019
*/

// Define an interface with the required properties
// This is structure your HttpClient request to declare the type of the response object
export class Ireports {             // Exports class Ireports
    id: number;
    nama_op: string;
    model_type: string;
    model_urut: number;
    result_image: Blob;
    result_checkbox: number;
    result_presentase: number;
    createdAt: number;
    updatedAt: number
}