export function successToast() {
  return (
    <div className="flex flex-col gap-4">
      <div
        class="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700"
        role="alert"
      >
        <div class="flex p-4">
          <div class="flex-shrink-0">
            <svg
              class="h-4 w-4 text-blue-500 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-gray-700 dark:text-gray-400">
              This is a normal message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function unsuccessfullToast() {
  <div
    class="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700"
    role="alert"
  >
    <div class="flex p-4">
      <div class="flex-shrink-0">
        <svg
          class="h-4 w-4 text-red-500 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-gray-700 dark:text-gray-400">
          This is an error message.
        </p>
      </div>
    </div>
  </div>;
}
