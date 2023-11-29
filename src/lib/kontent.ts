import { createDeliveryClient } from "@kontent-ai/delivery-sdk";

export const deliveryClient = createDeliveryClient({
    environmentId: import.meta.env.KONTENT_ENVIRONMENT_ID,
    previewApiKey: import.meta.env.KONTENT_PREVIEW_API_KEY,
});