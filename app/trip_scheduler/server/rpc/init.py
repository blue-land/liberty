def greeting(kwargs):
    print('start server side')
    return 'Hello!!'

def cat(args):
    print(args)
    count = args['count']
    mew = ''
    for cat in range(0,count,1):
        mew += 'ほぇ〜 '
    return mew


if __name__ == '__main__':
    greeting(**kwargs)