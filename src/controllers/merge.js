import { mergeSort } from '../managers/algorithms/mergeSort';
import { sendErrorResponse, sendResponse } from '../util';

export const handleMergeSort = (req, res) => {
  const { unsortedNumbers } = req.body;

  if (!unsortedNumbers) {
    return sendErrorResponse(res, 400, 'Parameter unsortedNumbers missing from the payload');
  }

  if (!Array.isArray(unsortedNumbers)) {
    return sendErrorResponse(res, 400, 'Bubblesort expected the unsortedNumbers parameter to be an array of numbers');
  }

  if (unsortedNumbers.some(isNaN)) {
    return sendErrorResponse(res, 400, 'Parameter unsortedNumbers contains a non-numeric element');
  }

  const sorted = mergeSort(unsortedNumbers);

  sendResponse(res, 200, {
    sortedNumbers: sorted
  });
};