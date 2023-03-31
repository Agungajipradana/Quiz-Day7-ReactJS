import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DelCustomerRequest, GetCustomerRequest } from "../ReduxSaga/Action/CustomerAction";
import FormikCustomerEdit from "./FormikCustomerEdit";
import FormikCustomerCreate from "./FormikCustomerCreate";

export default function CustomerSaga() {
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customerState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [displayDelete, setDisplayDelete] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetCustomerRequest());
  }, [refresh]);

  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = (id) => {
    dispatch(DelCustomerRequest(id));
    setDisplayDelete(true);
    setId(id);
    setRefresh(true);
  };

  return (
    <div>
      {displayEdit ? (
        <FormikCustomerEdit setRefresh={setRefresh} setDisplay={setDisplayEdit} id={id} />
      ) : display ? (
        <FormikCustomerCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <div class="container max-w-7xl mx-auto mt-8">
            <div class="mb-4">
              <h1 class="font-serif text-3xl font-bold underline decoration-gray-400">Customer List</h1>
              <div class="flex justify-end">
                <button class="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600" onClick={() => setDisplay(true)}>
                  Create Post
                </button>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                  <table class="min-w-full">
                    <thead>
                      <tr>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Customer ID</th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">First Name</th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Last Name</th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">User ID</th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Created At</th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Update At</th>
                        <th class="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colspan="3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {customer &&
                      customer.map((cust) => {
                        return (
                          <tbody class="bg-white">
                            <tr key={cust.customerId}>
                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="flex items-center">{cust.customerId}</div>
                              </td>

                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">{cust.firstname}</div>
                              </td>

                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p>{cust.lastname}</p>
                              </td>

                              <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                <span>{cust.userId}</span>
                              </td>

                              <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                <span>{cust.createdat}</span>
                              </td>

                              <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                <span>{cust.updatedat}</span>
                              </td>

                              <td className="d-flex">
                                <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                  <button href="#" class="text-indigo-600 hover:text-indigo-900" onClick={() => onClick(cust.customerId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                  </button>
                                </td>

                                <td class="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                                  <button href="#" onClick={() => onDelete(cust.customerId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </td>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
