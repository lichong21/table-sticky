const sticky = {
  inserted(el: any, binding: any) {
    const { parent, top = 0, isFixed = false } = binding.value || {};
    // 获取table的表头和表主体
    const header = el.children[1];
    const body = el.children[2];
    // 如果table的columns使用了fixed属性，则fixed尾true；
    let fixed = el.children[3];
    let fixedHeader: any;
    let ths: any[] = [];
    if (isFixed) {
      setTimeout(() => {
        fixed = el.children[3];
        fixedHeader = fixed.children[0];
        ths = fixedHeader.getElementsByTagName('th');
      });
    }
    // 获取表格的父容器
    const parentContiner = document.getElementById(parent)
    // 给父容器添加scroll滚动监听事件
    parentContiner?.addEventListener('scroll', function myScroll() {
      // 获取表头的高度
      const headHeight = header.clientHeight
      // 获取表头距离父容器的高度
      const headTop = header?.getBoundingClientRect().top;
      if (headTop < top) {
        body.style.paddingTop = `${headHeight}px`;
        header.style.position = 'fixed';
        header.style.zIndex = '2';
        header.style.top = `${top}px`;
        header.style.width = `${body.offsetWidth}px`;
        header.style.borderTop = '1px solid #EBEBEB';
        if (isFixed) {
          fixedHeader.style.position = 'fixed';
          fixedHeader.style.left = '110px';
          fixedHeader.style.top = `${top}px`;
          fixedHeader.style.zIndex = '4';
        }
        const hidderColumns = [].slice.call(ths).filter((col) => ([].slice.call((col as any).classList) as any).includes('is-hidden'));
        hidderColumns.forEach((th: any) => {
          th.style.display = 'none';
        })
        // [].slice.call(ths).forEach((th: any) => {
        //   console.log(th.classList);
        //   // th.style.display = 'none';
        // })
        // fixedHeader.classList.remove('el-table__fixed-header-wrapper')
      }

      const bodyTop = body?.getBoundingClientRect().top;
      // console.log('bodyTop', bodyTop, 'headTop', headTop, 'top', top);
      // if (bodyTop > headTop && bodyTop - headHeight > 0) {
      if (bodyTop > headTop && headTop === top) {
        console.log('吸顶结束');
        body.style.paddingTop = '0'
        header.style.position = 'relative';
        header.style.zIndex = '3';
        header.style.top = `${0}px`;
        header.style.width = `${body.offsetWidth}px`;
        header.style.borderTop = 'none';

        if (isFixed) {
          fixedHeader.style.position = 'relative';
          fixedHeader.style.left = '0px';
          fixedHeader.style.top = '0px';
        }
      }
    }, true);
  }
}
export default sticky;
