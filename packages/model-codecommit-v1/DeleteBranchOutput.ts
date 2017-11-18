import {_UnmarshalledBranchInfo} from './_BranchInfo';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of a delete branch operation.</p>
 */
export interface DeleteBranchOutput {
    /**
     * <p>Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.</p>
     */
    deletedBranch?: _UnmarshalledBranchInfo;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}