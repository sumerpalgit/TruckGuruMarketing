import type { ContactInquiryPayload, ContactInquiryResult } from './types';

const CONTACT_INQUIRY_URL =
  'https://truck-guru-api.testdevurl.com/api/v1/public/contact-inquiry';

export async function submitContactInquiry(
  payload: ContactInquiryPayload,
): Promise<ContactInquiryResult> {
  try {
    const res = await fetch(CONTACT_INQUIRY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        'x-custom-lang': 'en',
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: json?.message ?? 'Something went wrong. Please try again.',
        errors: Array.isArray(json?.errors) ? json.errors : undefined,
      };
    }

    return {
      success: true,
      message: json?.message ?? 'Your inquiry has been submitted successfully.',
    };
  } catch {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
