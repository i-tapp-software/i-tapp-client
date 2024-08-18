import axios, { AxiosError } from "axios";
import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

import { FetchResponse } from "@/types/utils";

export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
  handleReturnedServerError(e): FetchResponse {
    if (axios.isAxiosError(e)) {
      const err = e as AxiosError;

      if (Object.keys(err.response?.data ?? {}).length > 0) {
        const customError = err.response?.data as FetchResponse;

        return {
          statusCode: e.status!,
          message: customError.message ?? customError.error,
        };
      }

      return {
        statusCode: e.status!,
        message: e.message,
      };
    }

    return {
      statusCode: 500,
      message: "An error occured, please try again later!",
    };
  },
});
