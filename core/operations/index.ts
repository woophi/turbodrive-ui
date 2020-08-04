import { callApi } from 'core/common';
import * as models from 'core/models';

export const subscribe = (email: string) =>
  callApi<models.ResultSubscribe>('post', 'api/guest/subscribe', { email });

export const sendMessage = (data: Pick<models.MessageModel, 'email' | 'name'>) =>
  callApi<void>('post', `api/guest/send/message`, data);

export const getBlogComments = (blogId: string) =>
  callApi<models.CommentItem[] | null>('get', `api/guest/comments/blog?id=${blogId}`);

export const createComment = (blogId: string, data: models.NewComment) =>
  callApi<boolean>('post', `api/guest/comments/new/blog?id=${blogId}`, data);

export const getVisitorName = () =>
  callApi<string>('get', `api/guest/name`);

export const getCommentById = (commentId: string) =>
  callApi<models.CommentItem>('get', `api/guest/comments/comment?id=${commentId}`);

export const getUnsubLinkState = (uniqId: string) =>
  callApi<models.LinkState>('get', `api/guest/unsub/state?uniqId=${uniqId}`);

export const guestUnsub = (uniqId: string) =>
  callApi<void>('put', 'api/guest/unsub', { uniqId });

export const resetPassword = (email: string) =>
  callApi<void>('post', 'api/guest/password/reset', { email });

export const updatePassword = (password: string, linkId: string) =>
  callApi<string>('patch', 'api/guest/password/update', { password, linkId });

export const getResetPassLinkState = (uniqId: string) =>
  callApi<models.LinkState>('get', `api/guest/unsub/state?uniqId=${uniqId}`);
